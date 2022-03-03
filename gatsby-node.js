const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/BlogPost/BlogPost.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * Transform from "/1-graph-based-dungeon-generator-basics/"
 * to "/graph-based-dungeon-generator-basics-1/"
 */
function transformSlug(slug) {
  const endsWithSlash = slug.slice(slug.length - 1) === "/"
  const slashParts = slug.split("/")
  const postNameIndex = endsWithSlash ? slashParts.length - 2 : slashParts.length - 1

  const postName = slashParts[postNameIndex]
  const firstHyphenPosition = postName.indexOf("-")
  const postId = postName.substring(0, firstHyphenPosition)
  const restOfName = postName.substring(firstHyphenPosition + 1)
  slashParts[postNameIndex] = `${restOfName}-${postId}`;
  const newSlug = slashParts.join("/")

  console.log(newSlug);

  return newSlug
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    const transformedSlug = transformSlug(slug)

    if (node.frontmatter.title === "") {
      node.frontmatter.title = null
    }

    createNodeField({
      name: `slug`,
      node,
      value: transformedSlug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social!
      edgar: Edgar!
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: SocialInfo!
      email: SocialInfo!
      linkedin: SocialInfo!
      github: SocialInfo!
    }
    
    type SocialInfo {
      title: String!
      url: String!
    }
    
    type Edgar {
      assetStoreUrl: String!
      githubUnity: String!
      githubDotNet: String!
    }

    type Mdx implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
    }

    type Frontmatter {
      title: String!
      description: String
      date: Date! @dateformat
      series: String
      seriesName: String
    }

    type Fields {
      slug: String!
    }
  `)
}

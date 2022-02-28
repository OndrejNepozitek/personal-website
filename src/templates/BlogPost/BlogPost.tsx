import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo"
import { FunctionComponent } from "react"
import { BlogPostBySlugQuery } from "../../../graphql-types"
import * as styles from "./BlogPost.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getSeriesName } from "../../utils/blog-series"

const BlogPostTemplate: FunctionComponent<{
  data: BlogPostBySlugQuery
  location: string
}> = ({ data }) => {
  const post = data.mdx!
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const title = post.frontmatter.series
    ? `${getSeriesName(post.frontmatter.series)}: ${post.frontmatter.title}`
    : post.frontmatter.title;

  return (
    <Layout>
      <Seo
        title={title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={styles.content}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <MDXRenderer slug={post.fields.slug}>{post.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        series
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

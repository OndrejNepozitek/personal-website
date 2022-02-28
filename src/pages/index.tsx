import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import * as styles from "./styles/index.module.css"
import { FunctionComponent } from "react"
import { IndexQuery } from "../../graphql-types"
import { getEpisodeNumber, getSeriesName, isPostInSeries } from "../utils/blog-series"

const BlogIndex: FunctionComponent<{ data: IndexQuery }> = ({ data }) => {
  const siteTitle = data.site!.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <ol className={styles.posts}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug
          const slug = post.fields.slug

          return (
            <li key={slug}>
              <article
                className={styles.post}
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  {post.frontmatter.series && (
                    <div>
                      {/*<span className={styles.seriesPrefix}>Series: </span>*/}
                      <span className={styles.seriesTitle}>
                        {getSeriesName(post.frontmatter.series)}
                      </span>
                    </div>
                  )}
                  <h2 className={styles.postTitle}>
                    <Link to={slug} itemProp="url">
                      {isPostInSeries(slug) && (
                        <span>Part {getEpisodeNumber(slug)}: </span>
                      )}
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small className={styles.postDate}>
                    {post.frontmatter.date}
                  </small>
                </header>
                <section>
                  {post.frontmatter.description && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description,
                      }}
                      itemProp="description"
                    />
                  )}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          series
        }
      }
    }
  }
`

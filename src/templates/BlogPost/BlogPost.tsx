import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo"
import { FunctionComponent } from "react"
import { BlogPostBySlugQuery } from "../../../graphql-types"
import * as styles from "./BlogPost.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  getEpisodeNumber,
  getSeriesName,
  isPostInSeries,
} from "../../utils/blog-series"
import { EDGAR_URLS } from "../../constants/meta"

const BlogPostTemplate: FunctionComponent<{
  data: BlogPostBySlugQuery
  location: string
}> = ({ data }) => {
  const post = data.mdx!
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const title = post.frontmatter.series
    ? `Part ${getEpisodeNumber(post.fields.slug)}: ${post.frontmatter.title}`
    : post.frontmatter.title

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
          {isPostInSeries(post.fields.slug) && (
            <span className={styles.seriesTitle}>
              {getSeriesName(post.frontmatter.series!)}
            </span>
          )}
          <h1 itemProp="headline">{title}</h1>
          <div className={styles.meta}>
            <span>{post.frontmatter.date}</span>
          </div>
        </header>
        <MDXRenderer slug={post.fields.slug}>{post.body}</MDXRenderer>
        <hr />
        <div className={styles.footnote}>
          Written by <span className={styles.footnoteName}>Ondřej Nepožitek</span>, who is a software developer and procedural generation enthusiast. In his free time, he usually works on <a href={EDGAR_URLS.assetStore} target="_blank">Edgar</a>, his graph-based procedural level generator.
        </div>

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

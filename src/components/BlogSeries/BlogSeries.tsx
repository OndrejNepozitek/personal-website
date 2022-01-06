import * as React from "react"
import * as styles from "./BlogSeries.module.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import { BlogPostsWithSeriesQuery } from "../../../graphql-types"
import { FunctionComponent } from "react"

type PostData = {
  title: string
  slug: string
  series: string
}

let cachedPosts: Array<PostData> | null = null

function getPosts() {
  if (cachedPosts === null) {
    const data: BlogPostsWithSeriesQuery = useStaticQuery(
      graphql`
        query BlogPostsWithSeries {
            allMdx(sort: {order: ASC, fields: frontmatter___date}) {
            nodes {
              fields {
                slug
              }
              frontmatter {
                title
                series
                seriesName
              }
            }
          }
        }
      `
    )

    cachedPosts = data.allMdx.nodes
      .filter(post => post.frontmatter.series)
      .map(post => ({
        title: post.frontmatter.seriesName || post.frontmatter.title,
        series: post.frontmatter.series!,
        slug: post.fields.slug,
      }))
  }

  return cachedPosts
}

const BlogSeries: FunctionComponent<{ slug: string }> = ({ slug }) => {
  const posts = getPosts()
  const currentPost = posts.find(post => post.slug === slug)

  if (!currentPost) {
    throw `Slug ${slug} does not have any series associated!`
  }

  const series = currentPost.series
  const seriesPosts = posts.filter(post => post.series === series)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        This blog post is a part of the{" "}
        <span className={styles.seriesName}>Graph-Based Dungeon Generator</span>{" "}
        series:
        <ul className={styles.parts}>
          {seriesPosts.map((post, index) => {
            const text = `Part ${index + 1}: ${post.title}`
            const isActive = post.slug === slug

            return (
              <li className={styles.part}>
                {isActive ? (
                  <div>
                    {text}{" "}
                    <span className={styles.here}>(you are reading this)</span>
                  </div>
                ) : (
                  <Link to={post.slug}>
                    Part {index + 1}: {post.title}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BlogSeries

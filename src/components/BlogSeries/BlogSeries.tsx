import * as React from "react"
import * as styles from "./BlogSeries.module.css"
import { Link } from "gatsby"
import { FunctionComponent } from "react"
import { getEpisode, getEpisodes, seriesDatabase } from "../../utils/blog-series"

const BlogSeries: FunctionComponent<{ slug: string }> = ({ slug }) => {
  const currentPost = getEpisode(slug)
  const series = currentPost.series
  const episodes = getEpisodes(series)
  const title = seriesDatabase.get(series)

  if (!series) {
    throw "Series has no title!"
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        This blog post is a part of the{" "}
        <span className={styles.seriesName}>{title}</span> series:
        <ul className={styles.parts}>
          {episodes.map((post, index) => {
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

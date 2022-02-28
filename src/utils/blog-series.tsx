import { BlogPostsWithSeriesQuery } from "../../graphql-types"
import { graphql, useStaticQuery } from "gatsby"

type SeriesEpisode = {
  title: string
  slug: string
  series: string
  order: number
}

export const seriesDatabase = new Map<string, string>([
  ["graph-based-generator", "Graph-Based Dungeon Generator"],
])

export function getSeriesName(series: string) {
  return seriesDatabase.get(series)
}

function loadSeriesPosts(): Map<string, SeriesEpisode> {
  const seriesPosts = new Map<string, SeriesEpisode>()
  const data: BlogPostsWithSeriesQuery = useStaticQuery(
    graphql`
      query BlogPostsWithSeries {
        allMdx(sort: { order: ASC, fields: frontmatter___date }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              series
            }
          }
        }
      }
    `
  )

  const seriesPostCounter = new Map<string, number>()

  for (let post of data.allMdx.nodes) {
    if (!post.frontmatter.series) {
      continue
    }

    const order = seriesPostCounter.get(post.frontmatter.series) || 0
    seriesPostCounter.set(post.frontmatter.series, order + 1)

    seriesPosts.set(post.fields.slug, {
      title: post.frontmatter.title,
      series: post.frontmatter.series!,
      slug: post.fields.slug,
      order,
    })
  }

  return seriesPosts
}

let cachedPosts: Map<string, SeriesEpisode> | null = null

function getPosts() {
  if (cachedPosts === null) {
    cachedPosts = loadSeriesPosts()
  }

  return cachedPosts
}

/**
 * Check if a given post is part of any series.
 */
export function isPostInSeries(slug: string) {
  return getPosts().has(slug)
}

/**
 * Get episode data of a given post
 */
export function getEpisode(slug: string) {
  const episode = getPosts().get(slug)

  if (!episode) {
    throw `Post with slug ${slug} is not part of any series!`
  }

  return episode
}

/**
 * Get episode number. Starts with 1.
 */
export function getEpisodeNumber(slug: string) {
  const episode = getEpisode(slug)

  return episode.order + 1
}

export function getEpisodes(series: string) {
  const posts = Array.from(getPosts().values())
  const episodes = posts.filter(post => post.series === series)

  return episodes
}

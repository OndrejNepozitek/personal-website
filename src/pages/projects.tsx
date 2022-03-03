import * as React from "react"
import { FunctionComponent } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import { ProjectsQuery } from "../../graphql-types"

const ProjectsPage: FunctionComponent<{data: ProjectsQuery}> = ({data}) => {
  const links = data.site?.siteMetadata?.edgar!

  return (
    <Layout>
      <Seo title="Projects" description={"Projects"} />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">Projects</h1>
          <p>
            When working on hobby projects, I usually spend most of the time working on <b>Edgar</b>, my procedural level generator. You can find it on the <a href={links.assetStoreUrl} target="_blank">Unity Asset Store</a> or Github (<a href={links.githubUnity} target="_blank">Unity version</a>, <a href={links.githubDotNet} target="_blank">.NET version</a>).
          </p>
          <p>
            You can find some of my other projects on <a href={data.site?.siteMetadata?.social.github.url} target="_blank">Github</a>.
          </p>
        </header>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
    query Projects {
        site {
            ...SocialsFragment
            siteMetadata {
                edgar {
                    assetStoreUrl
                    githubDotNet
                    githubUnity
                }
            }
        }
    }
`

export default ProjectsPage
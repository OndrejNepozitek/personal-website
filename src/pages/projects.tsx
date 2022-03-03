import * as React from "react"
import { FunctionComponent } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { EDGAR_URLS, SOCIALS } from "../constants/meta"

const ProjectsPage: FunctionComponent = () => {
  return (
    <Layout>
      <Seo title="Projects" description={"Projects"} />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">Projects</h1>
          <p>
            When working on hobby projects, I usually spend most of the time working on <b>Edgar</b>, my procedural level generator. You can find it on the <a href={EDGAR_URLS.assetStore} target="_blank">Unity Asset Store</a> or Github (<a href={EDGAR_URLS.githubUnity} target="_blank">Unity version</a>, <a href={EDGAR_URLS.githubDotNet} target="_blank">.NET version</a>).
          </p>
          <p>
            You can find some of my other projects on <a href={SOCIALS.github.url} target="_blank">Github</a>.
          </p>
        </header>
      </article>
    </Layout>
  )
}

export default ProjectsPage
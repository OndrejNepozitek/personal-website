import * as React from "react"
import { FunctionComponent } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { AboutQuery } from "../../graphql-types"

const SocialLink: FunctionComponent<{
  data: { title: string; url: string }
}> = ({ data }) => {
  return (
    <a href={data.url} target="_blank">
      {data.title}
    </a>
  )
}

const AboutPage: FunctionComponent<{ data: AboutQuery }> = ({ data }) => {
  const socials = data.site?.siteMetadata?.social!

  return (
    <Layout>
      <Seo title="About" description={"About me"} />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">About</h1>
          <p>
            Hello, I'm <b>Ondřej Nepožitek</b> <i>[ˈondr̝ɛj nɛpoʒɪtɛk]</i> and this is my blog. I'm a software developer who also enjoys doing procedural content generation.
          </p>

          <p>This blog is <i>work in progress</i> as I apparently enjoy taking a perfectly working project (<i>my old blog</i>), porting it to a new and cooler technology (<i>gatsbyjs</i>) and losing some nice features in the process (<i>comments under posts</i>).</p>

          <h5>Do you want to get in touch?</h5>
          <p>
            Twitter: <SocialLink data={socials.twitter} /><br />
            Email: <SocialLink data={socials.email} /><br />
            Github: <SocialLink data={socials.github} /><br />
            LinkedIn: <SocialLink data={socials.linkedin} />
          </p>
        </header>
      </article>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query About {
    site {
        ...SocialsFragment
    }
  }
`

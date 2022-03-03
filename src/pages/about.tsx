import * as React from "react"
import { FunctionComponent } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo"
import { SOCIALS } from "../constants/meta"

const SocialLink: FunctionComponent<{
  data: { title: string; url: string }
}> = ({ data }) => {
  return (
    <a href={data.url} target="_blank">
      {data.title}
    </a>
  )
}

const AboutPage: FunctionComponent = () => {
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
            Twitter: <SocialLink data={SOCIALS.twitter} /><br />
            Email: <SocialLink data={SOCIALS.email} /><br />
            Github: <SocialLink data={SOCIALS.github} /><br />
            LinkedIn: <SocialLink data={SOCIALS.linkedin} />
          </p>
        </header>
      </article>
    </Layout>
  )
}

export default AboutPage

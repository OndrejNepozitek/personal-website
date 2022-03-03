import { graphql } from "gatsby"

export const socialsFragment = graphql`
  fragment SocialsFragment on Site {
    siteMetadata {
      title
      social {
        twitter {
          title
          url
        }
        email {
          title
          url
        }
        github {
          title
          url
        }
        linkedin {
          title
          url
        }
      }
    }
  }
`

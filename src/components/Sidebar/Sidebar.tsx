import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as styles from "./Sidebar.module.css"
import { contactLink } from "./Sidebar.module.css"
import Icon from "../Icon/Icon"
import getIcon from "../../utils/get_icon"
import { FunctionComponent } from "react"
import { SidebarQuery } from "../../../graphql-types"

const IconLink: FunctionComponent<{ link: string; iconName: string }> = ({
  link,
  iconName,
}) => {
  const icon = getIcon(iconName)

  return (
    <a href={link} target="_blank" className={contactLink}>
      <Icon name={iconName} icon={icon} />
    </a>
  )
}

const MenuItem: FunctionComponent<{ to: string }> = props => {
  return (
    <li>
      <Link
        className={styles.menuLink}
        activeClassName={styles.menuLinkActive}
        to={props.to}
      >
        {props.children}
      </Link>
    </li>
  )
}

const Sidebar: FunctionComponent = () => {
  const data: SidebarQuery = useStaticQuery(
    graphql`
      query Sidebar {
        site {
          ...SocialsFragment
        }
      }
    `
  )
  const socials = data.site?.siteMetadata?.social!

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <Link to="/">Ondřej Nepožitek</Link>
      </div>
      <div className={styles.subTitle}>
        software developer, procedural generation enthusiast
      </div>
      <ul className={styles.menu}>
        <MenuItem to="/">Blog</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/about">About</MenuItem>
      </ul>
      <div className={styles.contacts}>
        <IconLink link={socials.twitter.url} iconName="twitter" />
        <IconLink link={socials.github.url} iconName="github" />
        <IconLink link={socials.email.url} iconName="email" />
        <IconLink link={socials.linkedin.url} iconName="linkedin" />
      </div>
    </div>
  )
}

export default Sidebar

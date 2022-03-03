import * as React from "react"
import { Link} from "gatsby"
import * as styles from "./Sidebar.module.css"
import { contactLink } from "./Sidebar.module.css"
import Icon from "../Icon/Icon"
import getIcon from "../../utils/get_icon"
import { FunctionComponent } from "react"
import { SOCIALS } from "../../constants/meta"

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
        <IconLink link={SOCIALS.twitter.url} iconName="twitter" />
        <IconLink link={SOCIALS.github.url} iconName="github" />
        <IconLink link={SOCIALS.email.url} iconName="email" />
        <IconLink link={SOCIALS.linkedin.url} iconName="linkedin" />
      </div>
    </div>
  )
}

export default Sidebar

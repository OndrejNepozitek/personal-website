import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Sidebar.module.css"
import Icon from "../Icon/Icon"
import getIcon from "../../utils/get_icon"
import { FunctionComponent } from "react"

const IconLink : FunctionComponent<{link: string, iconName: string}> = ({ link, iconName }) => {
  const icon = getIcon(iconName);

  return (
    <a href={link} target="_blank" className={styles.contactLink}>
      <Icon name={iconName} icon={icon} />
    </a>
  )
}

const MenuItem : FunctionComponent<{to: string}> = props => {
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

const Sidebar : FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Ondřej Nepožitek</div>
      <div className={styles.subTitle}>
        software developer, procedural generation enthusiast
      </div>
      <ul className={styles.menu}>
        <MenuItem to="/">Blog</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/about">About</MenuItem>
      </ul>
      <div className={styles.contacts}>
        <IconLink link="https://twitter.com/OndrejNepozitek" iconName="twitter" />
        <IconLink link="https://github.com/OndrejNepozitek" iconName="github" />
        <IconLink link="mailto:ondra@nepozitek.cz" iconName="email" />
        <IconLink link="https://www.linkedin.com/in/ondrej-nepozitek/" iconName="linkedin" />
      </div>
    </div>
  )
}

export default Sidebar

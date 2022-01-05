import * as React from "react"
import * as styles from "./Layout.module.css"
import Sidebar from "../Sidebar/Sidebar"
import { FunctionComponent } from "react"

const Layout : FunctionComponent<{title?: string, location?: any}> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Layout

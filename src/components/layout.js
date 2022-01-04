import * as React from "react"
import * as styles from "./layout.module.css"
import Sidebar from "./Sidebar/Sidebar"

const Layout = ({ location, title, children }) => {
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

import * as React from "react"
import * as styles from "./Layout.module.css"
import Sidebar from "../Sidebar/Sidebar"
import { FunctionComponent } from "react"
import { MDXProvider } from "@mdx-js/react"
import BlogSeries from "../BlogSeries/BlogSeries"

const shortcodes = {
  BlogSeries
}

const Layout : FunctionComponent<{title?: string, location?: any}> = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </MDXProvider>
  )
}

export default Layout

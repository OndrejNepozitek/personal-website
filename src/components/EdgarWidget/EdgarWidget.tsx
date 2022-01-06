import * as React from "react"
import * as styles from "./EdgarWidget.module.css"
import { FunctionComponent } from "react"

const EdgarWidget : FunctionComponent = () => {
  return <div className={styles.wrapper}>
    <div className={styles.tag}>#procedural-generation</div>
    <div className={styles.heading}>
      Want to generate your own levels?
    </div>
    <div className={styles.text}>
     Check out my projects:
    </div>
    <div className={styles.project}>
      Edgar for Unity (<a href="https://github.com/OndrejNepozitek/Edgar-Unity" target="_blank">github</a>, <a href="https://ondrejnepozitek.itch.io/edgar-pro" target="_blank">itch.io</a>)
      <div className={styles.projectDescription}>
        - graph-based level generation in Unity
      </div>
    </div>
    <div className={styles.project}>
      Edgar for .NET (<a href="https://github.com/OndrejNepozitek/Edgar-DotNet" target="_blank">github</a>)
      <div className={styles.projectDescription}>
        - graph-based level generation in .NET
      </div>
    </div>
  </div>
}

export default EdgarWidget
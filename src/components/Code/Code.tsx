import * as React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
// import theme from './Prism.darcula'
import Prism from "prismjs"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-csharp"
import * as styles from "./Code.module.css"

const Code = (props: any) => {
  const className = props.children.props.className || ""
  const code = props.children.props.children.trim()
  const language = className.replace(/language-/, "")
  const withLinerNumbers = props.children.props.lineNumbers

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      // @ts-ignore
      Prism={Prism}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className={styles.code} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} className={styles.line}>
              {withLinerNumbers && (
                <span className={styles.lineNumber}>{i + 1}</span>
              )}
              <span className={styles.lineContent}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code

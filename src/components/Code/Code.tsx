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
  const language = className.replace(/language-/, "")
  const withLinerNumbers = props.children.props.lineNumbers
  let code = props.children.props.children.trim()
  let caption = false

  const captionMarker = "$caption:"
  if (code.startsWith(captionMarker)) {
    const firstNewline = code.indexOf("\n")
    caption = code.substring(captionMarker.length, firstNewline)
    code = code.substring(firstNewline + 1)
  }

  return (
    <div className={styles.codeWrapper}>
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
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  )
}

export default Code

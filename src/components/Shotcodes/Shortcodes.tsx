import * as React from "react"
import { EDGAR_URLS } from "../../constants/meta"

export const EdgarLinks = () => {
  return (
    <blockquote>
      <p>
        Are you looking for a ready-to-use implementation of the ideas from this blog post?
        Check out my Unity level generator{" "}
        <a href={EDGAR_URLS.assetStore} target="_blank">
          Edgar-Unity
        </a>{" "}
        or its .NET version{" "}
        <a href={EDGAR_URLS.githubDotNet} target="_blank">
          Edgar-DotNet
        </a>
        .
      </p>
    </blockquote>
  )
}

export const EdgarDownloadSection = () => {
  return (
    <>
      <h2>Download</h2>
      <p>
        You can find my implementation of this algorithm on github:{" "}
        <a
          href="https://github.com/OndrejNepozitek/Edgar-Unity"
          target="_blank"
        >
          Edgar-Unity
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/OndrejNepozitek/Edgar-DotNet"
          target="_blank"
        >
          Edgar-DotNet
        </a>{" "}. The first one is a Unity plugin and the second one is a .NET library.
      </p>
    </>
  )
}

import * as React from "react"

export const EdgarLinks = () => (
  <div>
    Are you looking for an implementation of the ideas from this blog post?
    Check out my Unity level generator{" "}
    <a href="https://github.com/OndrejNepozitek/Edgar-Unity" target="_blank">
      Edgar-Unity
    </a>{" "}
    or its .NET version{" "}
    <a href="https://github.com/OndrejNepozitek/Edgar-DotNet" target="_blank">
      Edgar-DotNet
    </a>
    .
  </div>
)

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

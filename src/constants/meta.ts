export type SocialInfo = {
  title: string;
  url: string;
}

function social(title: string, url: string) {
  return {title, url};
}

export const SOCIALS = {
  twitter: social("@OndrejNepozitek", "https://twitter.com/OndrejNepozitek"),
  github: social("OndrejNepozitek", "https://github.com/OndrejNepozitek"),
  email: social("ondra@nepozitek.cz", "mailto:ondra@nepozitek.cz"),
  linkedin: social("Ondřej Nepožitek", "https://www.linkedin.com/in/ondrej-nepozitek/"),
}

export const EDGAR_URLS = {
  assetStore: "https://assetstore.unity.com/packages/tools/utilities/edgar-pro-procedural-level-generator-212735?aid=1100lozBv&pubref=edgar-blog",
  githubDotNet: "https://github.com/OndrejNepozitek/Edgar-DotNet",
  githubUnity: "https://github.com/OndrejNepozitek/Edgar-Unity",
}
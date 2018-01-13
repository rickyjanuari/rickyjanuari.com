module.exports = {
  blogPostDir: "blog", // The name of directory that contains your posts.
  siteTitle: "Ricky Januari", // Site title.
  siteTitleAlt: "Front-end Web Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://rickyjanuari.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/rickyjanuari", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Personal Blog Ricky Januari", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-93054706-1", // GA tracking ID.
  disqusShortname: "rickyjanuari", // Disqus shortname.
  postDefaultCategoryID: "Front-end", // Default category for posts.
  userName: "Ricky Januari", // Username to display in the author segment.
  userTwitter: "rickyjanuari", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bandung, Indonesia", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Hello, I am Front-end Developer", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rickyjanuari",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/rickyjanuari",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:ricky010193@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

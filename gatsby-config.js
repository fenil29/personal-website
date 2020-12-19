module.exports = {
  siteMetadata: {
    title: `Fenil Kaneria`,
    description: `Hello,I'm Fenil Kaneria`,
    author: `Fenil Kaneria`,
    siteUrl: `https://fenilkaneria.tech`,
    keywords:"fenil kaneria,fenil,kaneria"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#172a45`,
        theme_color: `#172a45`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142500829-2",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://fenilkaneria.tech',
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: null,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

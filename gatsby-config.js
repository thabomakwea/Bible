module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `http://localhost/bible/graphql`,
    //   },
    // },
    {
      resolve: '@martinreiche/gatsby-firestore',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Genesis',
            collection: 'Genesis',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Exodus',
            collection: 'Exodus',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: require("./firebase.json")
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

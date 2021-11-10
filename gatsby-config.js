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
    //   // resolve: `gatsby-source-wordpress`,
    //   // options: {
    //   //   url: `http://localhost/bible/graphql`,
    //   // },
    // },
    {
      resolve: '@martinreiche/gatsby-firestore',
      options: {
        appConfig: {
          projectId: "bible-site",
        },
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
          },
          {
            type: 'Leviticus',
            collection: 'Leviticus',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Numbers',
            collection: 'Numbers',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Deuteronomy',
            collection: 'Deuteronomy',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Deuteronomy',
            collection: 'Deuteronomy',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Joshua',
            collection: 'Joshua',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Judges',
            collection: 'Judges',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Ruth',
            collection: 'Ruth',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OneSamuel',
            collection: '1-Samuel',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoSamuel',
            collection: '2-Samuel',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OneKings',
            collection: '1-Kings',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoKings',
            collection: '2-Kings',
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
    // {
      // resolve: "gatsby-plugin-firebase",
      // options: {
        // credentials: require("./firebase.json"),
    //     credentials: {
    //       apiKey: "AIzaSyCPmQ2BQ2mIRdTJkVTO-wXT6zjxuTuiD78",
    //       authDomain: "bible-site.firebaseapp.com",
    //       projectId: "bible-site",
    //       storageBucket: "bible-site.appspot.com",
    //       messagingSenderId: "936984469826",
    //       appID: "1:936984469826:web:71b65970c5635c0337a8db",
    //       measurementId: "G-C87EYRPJKF",
    //       databaseURL: 'http://localhost:4001?ns=bible-site'
    //     },
    //   }
    // },
    // {
    //   resolve: `gatsby-source-firestore`,
    //   options: {
    //     // credential or appConfig
    //     // credential: require(`./credentials.json`),
    //     appConfig: {
    //       // apiKey: "AIzaSyCPmQ2BQ2mIRdTJkVTO-wXT6zjxuTuiD78",
    //       // authDomain: "bible-site.firebaseapp.com",
    //       // projectId: "bible-site",
    //       // storageBucket: "bible-site.appspot.com",
    //       // messagingSenderId: "936984469826",
    //       // appID: "1:936984469826:web:71b65970c5635c0337a8db",
    //       databaseURL: 'http://localhost:9652/?ns=bible-site'

    //     },
    //     types: [
    //       {
    //         type: 'Genesis',
    //         collection: 'Genesis',
    //         map: doc => ({
    //           bible: doc.bible,
    //           book: doc.book,
    //           chapter: doc.chapter,
    //           text: doc.text,
    //           verse: doc.verse
    //         }),
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

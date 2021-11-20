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
          },
          {
            type: 'OneChronicles',
            collection: '1-Chronicles',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoChronicles',
            collection: '2-Chronicles',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Ezra',
            collection: 'Ezra',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Nehemiah',
            collection: 'Nehemiah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Esther',
            collection: 'Esther',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Job',
            collection: 'Job',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Psalms',
            collection: 'Psalms',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Proverbs',
            collection: 'Proverbs',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Ecclesiastes',
            collection: 'Ecclesiastes',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'SongOfSolomon',
            collection: 'Song-of-Solomon',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Isaiah',
            collection: 'Isaiah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Jeremiah',
            collection: 'Jeremiah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Lamentations',
            collection: 'Lamentations',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Ezekiel',
            collection: 'Ezekiel',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Daniel',
            collection: 'Daniel',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Hosea',
            collection: 'Hosea',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Joel',
            collection: 'Joel',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Amos',
            collection: 'Amos',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Obadiah',
            collection: 'Obadiah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Jonah',
            collection: 'Jonah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Micah',
            collection: 'Micah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Nahum',
            collection: 'Nahum',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Habakkuk',
            collection: 'Habakkuk',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Zephaniah',
            collection: 'Zephaniah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Haggai',
            collection: 'Haggai',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Zechariah',
            collection: 'Zechariah',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Malachi',
            collection: 'Malachi',
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
    }
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

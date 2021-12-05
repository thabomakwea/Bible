const { object } = require("underscore")

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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          worker: true,
          document: {
            id: "id",
            tag: "tag",
            store: [
              'id', 'book', 'chapter', 'verse', 'text'
            ],
            index: [{
              field: "book",
              tokenize: "forward",
              optimize: true,
              resolution: 9
            }, {
              field: "text",
              tokenize: "strict",
              optimize: true,
              resolution: 9,
              minlength: 3,
              context: {
                depth: 1,
                resolution: 3
              }
            }]
          }
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
           
            allGenesis {
              edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allExodus {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allLeviticus {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allNumbers {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allDeuteronomy {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allIsaiah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJeremiah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJoshua {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJudges {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allRuth {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneSamuel {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoSamuel {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneKings {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoKings {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneChronicles {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoChronicles {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allEzra {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allNehemiah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allEsther {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJob {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allPsalms {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allProverbs {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allEcclesiastes {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allLamentations {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allEzekiel {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allDaniel {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allHosea {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJoel {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allAmos {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allObadiah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJonah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allMicah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allNahum {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allHabakkuk {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allZephaniah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allHaggai {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allSongOfSolomon {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allZechariah {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allMalachi {
                edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
             allMatthew {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allMark {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allLuke{
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJohn {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allActs {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allRomans {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneCorinthians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoCorinthians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allGalatians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allEphesians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allPhilippians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allColossians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneThessalonians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoThessalonians {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneTimothy {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoTimothy {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTitus {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allPhilemon {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allHebrews {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJames {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOnePeter {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoPeter {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allOneJohn {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allTwoJohn {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allThreeJohn {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allJude {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            },
            allRevelation {
               edges {
                node {
                  id
                  verse
                  text
                  chapter
                  book
                  bible
                }
              }
            }

          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['book', 'text'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id','book', 'chapter', 'verse', 'text'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: async ({ data }) => {
          
          return [
            ...data.allGenesis.edges, 
            ...data.allExodus.edges,
            ...data.allLeviticus.edges,
            ...data.allNumbers.edges,
            ...data.allDeuteronomy.edges,
            ...data.allIsaiah.edges,
            ...data.allJeremiah.edges,
            ...data.allJoshua.edges,
            ...data.allJudges.edges,
            ...data.allOneSamuel.edges,
            ...data.allTwoSamuel.edges,
            ...data.allOneKings.edges,
            ...data.allTwoKings.edges,
            ...data.allOneChronicles.edges,
            ...data.allTwoChronicles.edges,
            ...data.allEzra.edges,
            ...data.allNehemiah.edges,
            ...data.allEsther.edges,
            ...data.allJob.edges,
            ...data.allPsalms.edges,
            ...data.allProverbs.edges,
            ...data.allEcclesiastes.edges,
            ...data.allLamentations.edges,
            ...data.allEzekiel.edges,
            ...data.allDaniel.edges,
            ...data.allHosea.edges,
            ...data.allJoel.edges,
            ...data.allAmos.edges,
            ...data.allObadiah.edges,
            ...data.allJonah.edges,
            ...data.allMicah.edges,
            ...data.allNahum.edges,
            ...data.allHabakkuk.edges,
            ...data.allZephaniah.edges,
            ...data.allHaggai.edges,
            ...data.allSongOfSolomon.edges,
            ...data.allZechariah.edges,
            ...data.allMalachi.edges,
            ...data.allMatthew.edges,
            ...data.allMark.edges,
            ...data.allLuk.edges,
            ...data.allJohn.edges,
            ...data.allActs.edges,
            ...data.allRomans.edges,
            ...data.allOneCorinthians.edges,
            ...data.allTwoCorinthians.edges,
            ...data.allGalatians.edges,
            ...data.allEphesians.edges,
            ...data.allPhilippians.edges,
            ...data.allColossians.edges,
            ...data.allOneThessalonians.edges,
            ...data.allTwoThessalonians.edges,
            ...data.allOneTimothy.edges,
            ...data.allTwoTimothy.edges,
            ...data.allTitus.edges,
            ...data.allPhilemon.edges,
            ...data.allHebrews.edges,
            ...data.allJames.edges,
            ...data.allOnePeter.edges,
            ...data.allTwoPeter.edges,
            ...data.allOneJohn.edges,
            ...data.allTwoJohn.edges,
            ...data.allThreeJohn.edges,
            ...data.allJude.edges,
            ...data.allRevelation.edges,

          
          ].map((node) => ({
              id: node.node.id,
              verse: node.node.verse,
              text: node.node.text,
              chapter: node.node.chapter,
              book: node.node.book
          }))
        }
          // Object.entries(data).map((node) => ({
          //   id: node.node.id,
          //   verse: node.node.verse,
          //   text: node.node.text,
          //   chapter: node.node.chapter,
          //   book: node.node.book,
          //   bible: node.node.bible,
          // })),
      },
    },
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
          },
          {
            type: 'Matthew',
            collection: 'Matthew',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Mark',
            collection: 'Mark',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Luke',
            collection: 'Luke',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Luke',
            collection: 'Luke',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'John',
            collection: 'John',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'John',
            collection: 'John',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Acts',
            collection: 'Acts',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Romans',
            collection: 'Romans',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OneCorinthians',
            collection: '1-Corinthians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoCorinthians',
            collection: '2-Corinthians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Galatians',
            collection: 'Galatians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Ephesians',
            collection: 'Ephesians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Philippians',
            collection: 'Philippians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Colossians',
            collection: 'Colossians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OneThessalonians',
            collection: '1-Thessalonians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoThessalonians',
            collection: '2-Thessalonians',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OneTimothy',
            collection: '1-Timothy',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoTimothy',
            collection: '2-Timothy',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Titus',
            collection: 'Titus',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Philemon',
            collection: 'Philemon',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Hebrews',
            collection: 'Hebrews',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'James',
            collection: 'James',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OnePeter',
            collection: '1-Peter',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoPeter',
            collection: '2-Peter',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'OneJohn',
            collection: '1-John',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'TwoJohn',
            collection: '2-John',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
           {
            type: 'ThreeJohn',
            collection: '3-John',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Jude',
            collection: 'Jude',
            map: doc => ({
              bible: doc.bible,
              book: doc.book,
              chapter: doc.chapter,
              text: doc.text,
              verse: doc.verse
            }),
          },
          {
            type: 'Revelation',
            collection: 'Revelation',
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
  ],
}

exports.onPreInit = () => { 
    const { firestoreImport } = require( 'node-firestore-import-export')
    const firebase = require("firebase-admin");
    const books = {
        newTestament: [
            {
                title: "Genesis",
                path: require("./data/content/genesis.json")
            },
            {
                title: "Exodus",
                path: require("./data/content/exodus.json")
            },
            {
                title: "Leviticus",
                path: require("./data/content/leviticus.json")
            },
            {
                title: "Numbers",
                path: require("./data/content/numbers.json")
            },
            {
                title: "Deuteronomy",
                path: require("./data/content/deuteronomy.json")
            },
            {
                title: "Joshua",
                path: require("./data/content/joshua.json")
            },
            {
                title: "Judges",
                path: require("./data/content/judges.json")
            },
            {
                title: "Ruth",
                path: require("./data/content/ruth.json")
            },
            {
                title: "1-Samuel",
                path: require("./data/content/1-Samuel.json")
            },
            {
                title: "2-Samuel",
                path: require("./data/content/2-Samuel.json")
            },
            {
                title: "1-Kings",
                path: require("./data/content/1-Kings.json")
            },
            {
                title: "2-Kings",
                path: require("./data/content/2-Kings.json")
            },
            {
                title: "1-Chronicles",
                path: require("./data/content/1-Chronicles.json")
            },
            {
                title: "2-Chronicles",
                path: require("./data/content/2-Chronicles.json")
            },
            {
                title: "Ezra",
                path: require("./data/content/ezra.json")
            }
            // {
            //     title: "Nehemiah",
            //     path: ""
            // },
            // {
            //     title: "Esther",
            //     path: ""
            // },
            // {
            //     title: "Job",
            //     path: ""
            // },
            // {
            //     title: "Psalms",
            //     path: ""
            // },
            // {
            //     title: "Proverbs",
            //     path: ""
            // },
            // {
            //     title: "Ecclesiastes",
            //     path: ""
            // },
            // {
            //     title: "Song of Songs",
            //     path: ""
            // },
            // {
            //     title: "Isaiah",
            //     path: ""
            // },
            // {
            //     title: "Jeremiah",
            //     path: ""
            // },
            // {
            //     title: "Lamentation",
            //     path: ""
            // },
            // {
            //     title: "Ezekiel",
            //     path: ""
            // },
            // {
            //     title: "Daniel",
            //     path: ""
            // },
            // {
            //     title: "Hosea",
            //     path: ""
            // },
            // {
            //     title: "Joel",
            //     path: ""
            // },
            // {
            //     title: "Amos",
            //     path: ""
            // },
            // {
            //     title: "Obadiah",
            //     path: ""
            // },
            // {
            //     title: "Jonah",
            //     path: ""
            // },
            // {
            //     title: "Micah",
            //     path: ""
            // },
            // {
            //     title: "Nahum",
            //     path: ""
            // },
            // {
            //     title: "Habakkuk",
            //     path: ""
            // },
            // {
            //     title: "Zephaniah",
            //     path: ""
            // },
            // {
            //     title: "Haggai",
            //     path: ""
            // },
            // {
            //     title: "Zechariah",
            //     path: ""
            // },
            // {
            //     title: "Malachi",
            //     path: ""
            // },

        ]
        // oldTestament: [
        //     {
        //         title: "Matthew",
        //         path: ""
        //     },
        //     {
        //         title: "Mark",
        //         path: ""
        //     },
        //     {
        //         title: "Luke",
        //         path: ""
        //     },
        //     {
        //         title: "John",
        //         path: ""
        //     },
        //     {
        //         title: "Acts",
        //         path: ""
        //     },
        //     {
        //         title: "Romans",
        //         path: ""
        //     },
        //     {
        //         title: "1 Corinthians",
        //         path: ""
        //     },
        //     {
        //         title: "2 Corinthians",
        //         path: ""
        //     },
        //     {
        //         title: "Galatians",
        //         path: ""
        //     },
        //     {
        //         title: "Ephesians",
        //         path: ""
        //     },
        //     {
        //         title: "Philippians",
        //         path: ""
        //     },
        //     {
        //         title: "Colossians",
        //         path: ""
        //     },
        //     {
        //         title: "1 Thessalonians",
        //         path: ""
        //     },
        //     {
        //         title: "2 Thessalonians",
        //         path: ""
        //     },
        //     {
        //         title: "1 Timothy",
        //         path: ""
        //     },
        //     {
        //         title: "2 Timothy",
        //         path: ""
        //     },
        //     {
        //         title: "Titus",
        //         path: ""
        //     },
        //     {
        //         title: "Philemon",
        //         path: ""
        //     },
        //     {
        //         title: "Hebrews",
        //         path: ""
        //     },
        //     {
        //         title: "James",
        //         path: ""
        //     },
        //     {
        //         title: "1 Peter",
        //         path: ""
        //     },
        //     {
        //         title: "2 Peter",
        //         path: ""
        //     },
        //     {
        //         title: "1 John",
        //         path: ""
        //     },
        //     {
        //         title: "2 John",
        //         path: ""
        //     },
        //     {
        //         title: "3 John",
        //         path: ""
        //     },
        //     {
        //         title: "Jude",
        //         path: ""
        //     },
        //     {
        //         title: "Revelation",
        //         path: ""
        //     }

        // ]

    }
    firebase.initializeApp({
        projectId: "bible-site"
    })

    const db = firebase.firestore()

    db.settings({
        host: "localhost:9657",
        ssl: false
    });
    
    // const data = require('ezra.json')    

    books.newTestament.map((book, i) => {
        firestoreImport(book.path, firebase.firestore().collection(book.title))
            .then(() => console.log('Data was imported.'));
    })
}
// CREATE NOTE
const path = require('path')

exports.createPages = async ({actions, graphql}) => {
    const {data} = await graphql(`
        query MyQuery {
            allGenesis {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }

                }
            }
            allExodus {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allLeviticus {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allNumbers {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allDeuteronomy {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allJoshua {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allJudges {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allRuth {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allOneSamuel {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allTwoSamuel {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allOneKings {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
            allTwoKings {
                group(field: chapter) {
                field
                fieldValue
                nodes {
                    verse
                    text
                    chapter
                    book
                    bible
                }
                }
            },
        }


    `)

    data.allGenesis.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/genesis/' + group.fieldValue,
            component: path.resolve('./src/templates/genesis.js'),
            context: { 
                chapter: group.fieldValue,
                total_chapters: data.allGenesis.group.length,
                data: group

            }
        })
    });

    data.allExodus.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/exodus/' + group.fieldValue,
            component: path.resolve('./src/templates/exodus.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allExodus.group.length,
                data: group

            }
        })
    });

    data.allLeviticus.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/leviticus/' + group.fieldValue,
            component: path.resolve('./src/templates/leviticus.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allLeviticus.group.length,
                data: group

            }
        })
    });

    data.allNumbers.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/numbers/' + group.fieldValue,
            component: path.resolve('./src/templates/numbers.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allNumbers.group.length,
                data: group

            }
        })
    });

    data.allDeuteronomy.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/deuteronomy/' + group.fieldValue,
            component: path.resolve('./src/templates/deuteronomy.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allDeuteronomy.group.length,
                data: group

            }
        })
    });

    data.allJoshua.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/joshua/' + group.fieldValue,
            component: path.resolve('./src/templates/joshua.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allJoshua.group.length,
                data: group

            }
        })
    });

    data.allJudges.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/judges/' + group.fieldValue,
            component: path.resolve('./src/templates/judges.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allJudges.group.length,
                data: group

            }
        })
    });

    data.allRuth.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/ruth/' + group.fieldValue,
            component: path.resolve('./src/templates/ruth.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allRuth.group.length,
                data: group

            }
        })
    });

    data.allOneSamuel.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/1-samuel/' + group.fieldValue,
            component: path.resolve('./src/templates/1-samuel.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allOneSamuel.group.length,
                data: group

            }
        })
    });

    data.allTwoSamuel.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/2-samuel/' + group.fieldValue,
            component: path.resolve('./src/templates/2-samuel.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allTwoSamuel.group.length,
                data: group

            }
        })
    });

    data.allOneKings.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/1-kings/' + group.fieldValue,
            component: path.resolve('./src/templates/1-kings.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allOneKings.group.length,
                data: group

            }
        })
    });

    data.allTwoKings.group.forEach(group => {
        actions.createPage({
            path: '/kjv21/2-kings/' + group.fieldValue,
            component: path.resolve('./src/templates/2-kings.js'),
            context: {
                chapter: group.fieldValue,
                total_chapters: data.allTwoKings.group.length,
                data: group

            }
        })
    });
}
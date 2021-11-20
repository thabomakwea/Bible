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
        },
        {
            title: "Nehemiah",
            path: require("./data/content/nehemiah.json")
        },
        {
            title: "Esther",
            path: require("./data/content/esther.json")
        },
        {
            title: "Job",
            path: require("./data/content/job.json")
        },
        {
            title: "Psalms",
            path: require("./data/content/psalms.json")
        },
        {
            title: "Proverbs",
            path: require("./data/content/proverbs.json")
        },
        {
            title: "Ecclesiastes",
            path: require("./data/content/ecclesiastes.json")
        },
        {
            title: "Song-of-Solomon",
            path: require("./data/content/song-of-solomon.json")
        },
        {
            title: "Isaiah",
            path: require("./data/content/isaiah.json")
        },
        {
            title: "Jeremiah",
            path: require("./data/content/jeremiah.json")
        },
        {
            title: "Lamentations",
            path: require("./data/content/lamentations.json")
        },
        {
            title: "Ezekiel",
            path: require("./data/content/ezekiel.json")
        },
        {
            title: "Daniel",
            path: require("./data/content/daniel.json")
        },
        {
            title: "Hosea",
            path: require("./data/content/hosea.json")
        },
        {
            title: "Joel",
            path: require("./data/content/joel.json")
        },
        {
            title: "Amos",
            path: require("./data/content/amos.json")
        },
        {
            title: "Obadiah",
            path: require("./data/content/Obadiah.json")
        },
        {
            title: "Jonah",
            path: require("./data/content/jonah.json")
        },
        {
            title: "Micah",
            path: require("./data/content/micah.json")
        },
        {
            title: "Nahum",
            path: require("./data/content/nahum.json")
        },
        {
            title: "Habakkuk",
            path: require("./data/content/habakkuk.json")
        },
        {
            title: "Zephaniah",
            path: require("./data/content/zephaniah.json")
        },
        {
            title: "Haggai",
            path: require("./data/content/haggai.json")
        },
        {
            title: "Zechariah",
            path: require("./data/content/zechariah.json")
        },
        {
            title: "Malachi",
            path: require("./data/content/malachi.json")
        }

    ],
    oldTestament: [
        {
            title: "Matthew",
            path: ""
        },
        {
            title: "Mark",
            path: ""
        },
        {
            title: "Luke",
            path: ""
        },
        {
            title: "John",
            path: ""
        },
        {
            title: "Acts",
            path: ""
        },
        {
            title: "Romans",
            path: ""
        },
        {
            title: "1-Corinthians",
            path: ""
        },
        {
            title: "2-Corinthians",
            path: ""
        },
        {
            title: "Galatians",
            path: ""
        },
        {
            title: "Ephesians",
            path: ""
        },
        {
            title: "Philippians",
            path: ""
        },
        {
            title: "Colossians",
            path: ""
        },
        {
            title: "1-Thessalonians",
            path: ""
        },
        {
            title: "2-Thessalonians",
            path: ""
        },
        {
            title: "1-Timothy",
            path: ""
        },
        {
            title: "2-Timothy",
            path: ""
        },
        {
            title: "Titus",
            path: ""
        },
        {
            title: "Philemon",
            path: ""
        },
        {
            title: "Hebrews",
            path: ""
        },
        {
            title: "James",
            path: ""
        },
        {
            title: "1-Peter",
            path: ""
        },
        {
            title: "2-Peter",
            path: ""
        },
        {
            title: "1-John",
            path: ""
        },
        {
            title: "2-John",
            path: ""
        },
        {
            title: "3-John",
            path: ""
        },
        {
            title: "Jude",
            path: ""
        },
        {
            title: "Revelation",
            path: ""
        }

    ]

}
const fs = require('fs');
// CREATE NOTE
const path = require('path')

exports.onPreInit = () => { 
    const { firestoreImport } = require( 'node-firestore-import-export')
    const firebase = require("firebase-admin");
    
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
            },
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
            allOneChronicles {
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
            allTwoChronicles {
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
            allEzra {
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
            allNehemiah {
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
            allEsther {
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
            allJob {
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
            allPsalms {
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
            allProverbs {
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
            allEcclesiastes {
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
            allLamentations {
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
            allEzekiel {
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
            allDaniel {
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
            allHosea {
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
            allJoel {
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
            allAmos {
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
            allObadiah {
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
            allJonah {
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
            allMicah {
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
            allNahum {
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
            allHabakkuk {
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
            allZephaniah {
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
            allHaggai {
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
            allSongOfSolomon {
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
            allZechariah {
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
            allMalachi {
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
        }


    `)


    for (const [key, group] of Object.entries(data)) {
        const book = new Map(Object.entries(group));
        console.log('Book:',  book.get('group')[0].nodes[0].book.toLowerCase() );
   
        // Create emp;ty template files | NEW TESTAMENT

        // fs.appendFile(path.join(__dirname, "./src/templates/new-testament", book.get('group')[0].nodes[0].book.toLowerCase()  + '.js'), '', function (err) {
        //     if (err) throw err;
        //     console.log('File is created successfully.');
        // });

        // Create page

        book.get('group').forEach(group => {
            actions.createPage({
                path: '/kjv21/' + book.get('group')[0].nodes[0].book.toLowerCase() + '/' + group.fieldValue,
                component: path.resolve('./src/templates/new-testament/' + book.get('group')[0].nodes[0].book.toLowerCase() + '.js'),
                context: {
                    chapter: group.fieldValue,
                    total_chapters: book.get('group').length,
                    data: group

                } 
            })
        });
    }

}
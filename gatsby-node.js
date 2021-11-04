exports.onPreInit = () => console.log("hello plugin")
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
            }
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
            path: '/kjv21/Judges/' + group.fieldValue,
            component: path.resolve('./src/templates/Judges.js'),
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

}
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
}
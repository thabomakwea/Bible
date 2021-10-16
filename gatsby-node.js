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
}
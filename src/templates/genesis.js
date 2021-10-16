import * as React from "react"
import Layout from "../components/layouts/layout"
import Chapter from "../components/common/chapter/chapter"
import { graphql } from 'gatsby'
import { useState, useEffect } from 'react';


const ChapterDetails = ({ data, pageContext }) => {
    console.log(pageContext)
   
    return (
        <Layout>
            <div className="container chapter">
                <div className="row">
                    <div className="col-8">
                        <h1>Genesis {pageContext.chapter }</h1>
                        {
                            data.allGenesis.edges.map((node, i) =>
                                <p key={i}> 
                                    <span>{node.node.verse}.</span>
                                    {node.node.text}
                                </p>
                            )
                        }

                    </div>
                    <div className="col-4">
                        <h1>Chapters</h1>
                        {
                            Array(pageContext.total_chapters).fill(1).map((item, i) =>
                                <Chapter key={i} title={i + 1} />
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ChapterDetails

export const query = graphql`
query Chapters ($chapter: String) {
    allGenesis(filter: { chapter: { eq: $chapter } }) {
    edges {
      node {
                book
                bible
                chapter
                text
                verse
            }
        }
    }
}
`
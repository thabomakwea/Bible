import * as React from "react"
import Layout from "../components/layouts/layout"
import Chapter from "../components/common/chapter/chapter"
import Pagination from "../components/common/pagination/pagination"
import { graphql } from 'gatsby'
import { useState, useEffect } from 'react';

const ChapterDetails = ({ data, pageContext }) => {
    console.log(pageContext)
   
    return (
        <Layout>
            <div className="container chapter">

                {/* <div className="row">
                    <div class="alert alert-primary d-flex align-items-center" role="alert">
                        <div>
                            Current Chapter: <strong> {pageContext.chapter}</strong> &nbsp;&nbsp;&nbsp;
                            Verses: <strong> {data.allGenesis.edges.length}</strong>&nbsp;&nbsp;&nbsp;
                            Chapters: <strong> {pageContext.total_chapters}</strong>
                           
                        </div>
                    </div>
                </div> */}

                <div className="row">
                   
                    <div className="col-7">

                        <h1 className="d-flex flex-row chapter-header">
                            <span className="badge bg-dark ms-0 me-4">
                                Chapter {pageContext.chapter}
                            </span>
                            {pageContext.data.nodes[0].book}  
                            
                        </h1>
                        
                        {
                            data.allGenesis.edges.map((node, i) =>
                                <p key={i}> 
                                    <span>{node.node.verse}.</span>
                                    {node.node.text}
                                </p>
                            )
                        }
                        
                        <Pagination 
                            currentChapter={pageContext.chapter} 
                            totalChapters={pageContext.total_chapters} 
                            book={pageContext.data.nodes[0].book} 
                        />
                    </div>
                    <div className="col-4 offset-1">

                        {/* CHAPTERS  */}
                        <h1 className="d-flex flex-row chapter-header">  
                            <span className="badge bg-dark me-2 ms-0">
                            {pageContext.total_chapters}</span> Chapters
                        </h1>
                        
                        <h3>Select a chapter</h3>
                        {
                            Array(pageContext.total_chapters).fill(1).map((item, i) =>
                                <Chapter key={i} title={i + 1} chapter={pageContext.chapter} book={pageContext.data.nodes[0].book}/>
                            )
                        }

                        {/* VERSES  */}
                        <h1 className="d-flex flex-row chapter-header mt-4">  <span className="badge bg-dark me-2 ms-0">{data.allGenesis.edges.length}</span> Verses</h1>
                        <h3>Select a verse</h3>

                        {
                            Array(data.allGenesis.edges.length).fill(1).map((item, i) =>
                                <Chapter key={i} title={i + 1} chapter="" book="" />
                            )
                        }
                    </div>

                </div>

                <div className="row">
                    <div className="col-7">
                        
                    </div>
                    <div className="col-4 offset-1">
                       
                    </div>
                </div>

                
            </div>
        </Layout>
    )
}

export default ChapterDetails

export const query = graphql`
query GenesisChapters ($chapter: String) {
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
import * as React from "react"
import Layout from "../components/layouts/layout"
import Chapter from "../components/common/chapter/chapter"
import { graphql } from 'gatsby'
import { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ChapterDetails = ({ data, pageContext }) => {
    console.log(pageContext)
   
    return (
        <Layout>
            <div className="container chapter">

                {/* <div className="row">
                    <div class="alert alert-primary d-flex align-items-center" role="alert">
                        <div>
                            Current Chapter: <strong> {pageContext.chapter}</strong> &nbsp;&nbsp;&nbsp;
                            Verses: <strong> {data.allLeviticus.edges.length}</strong>&nbsp;&nbsp;&nbsp;
                            Chapters: <strong> {pageContext.total_chapters}</strong>
                           
                        </div>
                    </div>
                </div> */}

                <div className="row">
                   
                    <div className="col-7">
                        <h1 className="d-flex flex-row chapter-header">{pageContext.data.nodes[0].book}  <span className="badge bg-dark">Chapter {pageContext.chapter}</span></h1>
                        {
                            data.allLeviticus.edges.map((node, i) =>
                                <p key={i}> 
                                    <span>{node.node.verse}.</span>
                                    {node.node.text}
                                </p>
                            )
                        }

                    </div>
                    <div className="col-4 offset-1">
                        <h1 className="d-flex flex-row chapter-header">  <span className="badge bg-dark me-2 ms-0">{pageContext.total_chapters}</span> Chapters</h1>
                        {
                            Array(pageContext.total_chapters).fill(1).map((item, i) =>
                                <Chapter key={i} title={i + 1} chapter={pageContext.chapter} book={pageContext.data.nodes[0].book}/>
                            )
                        }
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-danger me-2"><FaChevronLeft /> Previou chapter</button>
                        <button type="button" className="btn btn-dark me-2">Testaments</button>
                        <button type="button" className="btn btn-danger">Next Chapter <FaChevronRight /> </button>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default ChapterDetails

export const query = graphql`
query LeviticusChapters ($chapter: String) {
    allLeviticus(filter: { chapter: { eq: $chapter } }) {
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
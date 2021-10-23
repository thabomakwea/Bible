import * as React from "react"
import Layout from "../components/layouts/layout"
import Chapter from "../components/common/chapter/chapter"
import Pagination from "../components/common/pagination/pagination"
import ChapterHeader from "../components/common/chapter-header/chapter_header"
import { graphql } from 'gatsby'
import Verse from "../components/common/verse/verse"
import NumberSelector from "../components/common/number_selector/number_selector"
import Spacing from "../components/common/spacing/spacing"
import { useState, useEffect } from 'react';

const ChapterDetails = ({ data, pageContext }) => {
    const [verse, setVerse] = useState();

    return (
        <Layout
            testament={pageContext.data.nodes[0].book}
            chapter={pageContext.chapter}

        >
            <div className="container chapter">

                <div className="row">
                    <div class="alert alert-primary d-flex align-items-center" role="alert">
                        <div>
                            Current Chapter: <strong> {pageContext.chapter}</strong> &nbsp;&nbsp;&nbsp;
                            Verses: <strong> {data.allExodus.edges.length}</strong>&nbsp;&nbsp;&nbsp;
                            Chapters: <strong> {pageContext.total_chapters}</strong>

                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-7">

                        <ChapterHeader
                            darkText={'Chapter ' + pageContext.chapter}
                            normalText={pageContext.data.nodes[0].book}
                        />

                        <Verse
                            verses={data.allExodus}
                            selectedVerse={verse}
                        />

                        <Pagination
                            currentChapter={pageContext.chapter}
                            totalChapters={pageContext.total_chapters}
                            book={pageContext.data.nodes[0].book}
                        />
                    </div>

                    <div className="col-4 offset-1">

                        <ChapterHeader
                            darkText={data.allExodus.edges.length}
                            normalText={'Verses'}
                        />

                        <NumberSelector
                            title={'Select a verse'}
                            numbers={data.allExodus.edges.length}
                            chapter={pageContext.chapter}
                            book={pageContext.data.nodes[0].book}
                            isVerse={true}
                            setVerse={setVerse}
                            primary={true}
                        />

                        <Spacing />

                        <ChapterHeader
                            darkText={pageContext.total_chapters}
                            normalText={'Chapters'}
                        />

                        <NumberSelector
                            title={'Select a chapter'}
                            numbers={pageContext.total_chapters}
                            chapter={pageContext.chapter}
                            book={pageContext.data.nodes[0].book}
                            isVerse={false}
                            primary={false}
                        />

                    </div>

                </div>


            </div>
        </Layout>
    )
}

export default ChapterDetails

export const query = graphql`
query ExodusChapters ($chapter: String) {
    allExodus(filter: { chapter: { eq: $chapter } }) {
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
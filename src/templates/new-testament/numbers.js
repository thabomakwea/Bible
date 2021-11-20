import * as React from "react"
import Layout from "../../components/layouts/layout"
import Pagination from "../../components/common/pagination/pagination"
import ChapterHeader from "../../components/common/chapter-header/chapter_header"
import { graphql } from 'gatsby'
import Verse from "../../components/common/verse/verse"
import NumberSelector from "../../components/common/number_selector/number_selector"
import Spacing from "../../components/common/spacing/spacing"
import Books from "../../components/common/books/books"
import Book from "../../components/common/book/book"
import './testament.css'
import { useState, useEffect } from 'react';

const ChapterDetails = ({ data, pageContext }) => {
    const [verse, setVerse] = useState(1);
    const books = {
        newTestament: [
            {
                title: "Genesis",
                total: 50
            },
            {
                title: "Exodus",
                total: 50
            },
            {
                title: "Leviticus",
                total: 50
            },
            {
                title: "Numbers",
                total: 50
            },
            {
                title: "Deuteronomy",
                total: 50
            },
            {
                title: "Joshua",
                total: 50
            },
            {
                title: "Judges",
                total: 50
            },
            {
                title: "Ruth",
                total: 50
            },
            {
                title: "1 Samuel",
                total: 50
            },
            {
                title: "2 Samuel",
                total: 50
            },
            {
                title: "1 Kings",
                total: 50
            },
            {
                title: "2 Kings",
                total: 50
            },
            {
                title: "1 Chronicles",
                total: 50
            },
            {
                title: "2 Chronicles",
                total: 50
            },
            {
                title: "Ezra",
                total: 50
            },
            {
                title: "Nehemiah",
                total: 50
            },
            {
                title: "Esther",
                total: 50
            },
            {
                title: "Job",
                total: 50
            },
            {
                title: "Psalms",
                total: 50
            },
            {
                title: "Proverbs",
                total: 50
            },
            {
                title: "Ecclesiastes",
                total: 50
            },
            {
                title: "Song of Songs",
                total: 50
            },
            {
                title: "Isaiah",
                total: 50
            },
            {
                title: "Jeremiah",
                total: 50
            },
            {
                title: "Lamentation",
                total: 50
            },
            {
                title: "Ezekiel",
                total: 50
            },
            {
                title: "Daniel",
                total: 50
            },
            {
                title: "Hosea",
                total: 50
            },
            {
                title: "Joel",
                total: 50
            },
            {
                title: "Amos",
                total: 50
            },
            {
                title: "Obadiah",
                total: 50
            },
            {
                title: "Jonah",
                total: 50
            },
            {
                title: "Micah",
                total: 50
            },
            {
                title: "Nahum",
                total: 50
            },
            {
                title: "Habakkuk",
                total: 50
            },
            {
                title: "Zephaniah",
                total: 50
            },
            {
                title: "Haggai",
                total: 50
            },
            {
                title: "Zechariah",
                total: 50
            },
            {
                title: "Malachi",
                total: 50
            },

        ],
        oldTestament: [
            {
                title: "Matthew",
                total: 50
            },
            {
                title: "Mark",
                total: 50
            },
            {
                title: "Luke",
                total: 50
            },
            {
                title: "John",
                total: 50
            },
            {
                title: "Acts",
                total: 50
            },
            {
                title: "Romans",
                total: 50
            },
            {
                title: "1 Corinthians",
                total: 50
            },
            {
                title: "2 Corinthians",
                total: 50
            },
            {
                title: "Galatians",
                total: 50
            },
            {
                title: "Ephesians",
                total: 50
            },
            {
                title: "Philippians",
                total: 50
            },
            {
                title: "Colossians",
                total: 50
            },
            {
                title: "1 Thessalonians",
                total: 50
            },
            {
                title: "2 Thessalonians",
                total: 50
            },
            {
                title: "1 Timothy",
                total: 50
            },
            {
                title: "2 Timothy",
                total: 50
            },
            {
                title: "Titus",
                total: 50
            },
            {
                title: "Philemon",
                total: 50
            },
            {
                title: "Hebrews",
                total: 50
            },
            {
                title: "James",
                total: 50
            },
            {
                title: "1 Peter",
                total: 50
            },
            {
                title: "2 Peter",
                total: 50
            },
            {
                title: "1 John",
                total: 50
            },
            {
                title: "2 John",
                total: 50
            },
            {
                title: "3 John",
                total: 50
            },
            {
                title: "Jude",
                total: 50
            },
            {
                title: "Revelation",
                total: 50
            }

        ]

    }


    return (
        <Layout
            testament={pageContext.data.nodes[0].book}
            chapter={pageContext.chapter}
            totalChapters={pageContext.total_chapters}
            numbers={data.allNumbers.edges.length}
            book={pageContext.data.nodes[0].book}
            setVerse={setVerse}
            selectedVerse={verse}
        >
            <div className="container chapter">

                <div className="row">

                    <div className="col-7">

                        <ChapterHeader
                            darkText={'Chapter ' + pageContext.chapter}
                            normalText={pageContext.data.nodes[0].book}
                        />

                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            <div>
                                You are reading <strong> {pageContext.data.nodes[0].book}</strong>&nbsp; chapter <strong> {pageContext.chapter}</strong> &nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <Verse
                            verses={data.allNumbers}
                            selectedVerse={verse}
                        />

                        <Pagination
                            currentChapter={pageContext.chapter}
                            totalChapters={pageContext.total_chapters}
                            book={pageContext.data.nodes[0].book}
                        />
                        <Spacing />
                        <Books title="New testament">
                            {
                                books.newTestament.map((el, i) =>
                                    <Book key={i} title={el.title} count={el.total} colSize={4}></Book>
                                )
                            }
                        </Books>
                        <Spacing></Spacing>
                        <Books title="Old testament">
                            {
                                books.oldTestament.map((el, i) =>
                                    <Book key={i} title={el.title} count={el.total} colSize={4}></Book>
                                )
                            }
                        </Books>
                    </div>

                    <div className="col-4 offset-1">

                        <ChapterHeader
                            darkText={data.allNumbers.edges.length}
                            normalText={'Verses'}
                        />

                        <NumberSelector
                            title={'Select a verse'}
                            numbers={data.allNumbers.edges.length}
                            chapter={pageContext.chapter}
                            book={pageContext.data.nodes[0].book}
                            isVerse={true}
                            setVerse={setVerse}
                            selectedVerse={verse}
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
                <Spacing />
            </div>

        </Layout>
    )
}

export default ChapterDetails

export const query = graphql`
query NumbersChapters ($chapter: String) {
    allNumbers(filter: { chapter: { eq: $chapter } }) {
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
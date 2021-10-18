import React from 'react'
import { Link } from 'gatsby'
import './chapter.css'
const Chapter = ({ data, title, chapter, book }) => {
    const link = "/kjv21/" + book.toLowerCase()  +"/" + title
    return (
        <>
            <Link to={link}>
                <button type="button" className={Number(chapter) === Number(title) ? "btn btn-dark chapter me-3 mb-3" : "btn btn-danger chapter me-3 mb-3"}>
                    {title}
                </button>
            </Link>
        </>
    )
}

export default Chapter
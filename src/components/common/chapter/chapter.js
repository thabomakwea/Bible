import React from 'react'
import { Link } from 'gatsby'
import './chapter.css'
const Chapter = ({ data, title, chapter, book, isVerse, setVerse }) => {
    const link = "/kjv21/" + book.toLowerCase()  +"/" + title
    
    return (

            !isVerse

            ? 
                <Link to={link}>
                    <button type="button" className={Number(chapter) === Number(title) ? "btn btn-dark chapter me-3 mb-3" : "btn btn-danger chapter me-3 mb-3"}>
                        {title}
                    </button>
                </Link>
            :
                <button type="button" className={Number(chapter) === Number(title) ? "btn btn-dark chapter me-3 mb-3" : "btn btn-danger chapter me-3 mb-3"} onClick={ () =>  {
                    const verse = document.getElementById("verse-" + title)
                    verse.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                    setVerse(title)
                }}>
                    {title}
                </button>
            
    )
}

export default Chapter
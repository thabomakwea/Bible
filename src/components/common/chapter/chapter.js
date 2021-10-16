import React from 'react'
import { Link } from 'gatsby'
import './chapter.css'
const Chapter = ({ data, title, children }) => {
    
    return (
        <>
            <Link to={`/kjv21/genesis/${title}`}>
                <button type="button" className="btn btn-danger chapter me-3 mb-3">
                    {title}
                </button>
            </Link>
        </>
    )
}

export default Chapter
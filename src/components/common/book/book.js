import React from 'react'
import { Link } from "gatsby"

const Book = ({ children, title, count, data, book }) => {
    const link = "/kjv21/" + title.toLowerCase() +"/1"
    return (
        <>
            <Link to={link} state={data}>
                <button type="button" className="btn btn-light me-3 mb-3">
                    {title} 
                </button>
            </Link>

        </>
    )
}

export default Book
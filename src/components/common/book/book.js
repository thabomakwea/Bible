import React from 'react'
import { Link } from "gatsby"

const Book = ({ children, title, count, data }) => {

    return (
        <>
            <Link to="/kjv21/genesis/1" state={data}>
                <button type="button" className="btn btn-light me-3 mb-3">
                    {title} <span className="badge badge-pill bg-danger">{count}</span>
                </button>
            </Link>

        </>
    )
}

export default Book
import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'gatsby'

const Pagination = ({ children, book, currentChapter, totalChapter }) => {
    const nextChapter = "/kjv21/" + book.toLowerCase() + "/" + ( Number(currentChapter) + 1)
    const previousChapter = "/kjv21/" + book.toLowerCase() + "/" + (Number(currentChapter) - 1)
    return (
        <>
            <Link to={previousChapter}>
                <button type="button" className="btn btn-dark me-2"><FaChevronLeft /> Previous chapter</button>
            </Link>
            <Link to="/">
                <button type="button" className="btn btn-danger me-2">Testaments</button>
            </Link>

            <Link to={nextChapter}>
                <button type="button" className="btn btn-dark">Next Chapter <FaChevronRight /> </button>
            </Link>

        </>
    )
}

export default Pagination
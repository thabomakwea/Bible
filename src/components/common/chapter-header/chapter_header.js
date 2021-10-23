import React from 'react'

const ChapterHeader = ( {darkText, normalText} ) => {
    
    return (
            <h1 className="d-flex flex-row chapter-header">
                <span className="badge bg-dark ms-0 me-4">
                    { darkText }
                </span>
                { normalText }

            </h1>
    )
}

export default ChapterHeader

import React from 'react'
import "./verse.css"

const Verse = ({ verse }) => {
    console.log("Data", verse)
    return (
            
        <div className="card verse__container">
            <div className="card-body">
                {verse}
            </div>
        </div>
    )
}

export default Verse
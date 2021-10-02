import React from 'react'

const Verse = ({ verse }) => {
    console.log("Data", verse)
    return (
            
        <div className="card">
            <div className="card-body">
                {verse}
            </div>
        </div>
    )
}

export default Verse
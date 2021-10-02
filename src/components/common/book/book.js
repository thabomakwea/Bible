import React from 'react'

const Book = ({ children, title, data }) => {
    return (
        <>

            <div className="accordion" id="accordionExample">      
         
                <div 
                    className="accordion-item" 
                >
                    <h2 
                        className="accordion-header" 
                        id="headingOne"
                    >
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapse-1"
                            aria-expanded="false" 
                            aria-controls="#collapse-1"
                        >
                            {title}
                        </button>
                    </h2>
                    <div 
                        id="collapse-1"
                        className="accordion-collapse collapse" 
                        aria-labelledby="headingOne" 
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>Chapters: 20</p>
                            <p>Verses: 20</p>
                            <h6>Select a chapter</h6>
                            <main>{children} </main>
                        </div>
                    </div>
                </div>
      
            </div>
        </>
    )
}

export default Book
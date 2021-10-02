import React from 'react'

const Chapter = ({ data, title, children }) => {
    return (
        <>
        <div className="accordion" id="accordionExample2">

            <div
                className="accordion-item"
            >
                <h2
                    className="accordion-header"
                    id="headingTwo"
                >
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="#collapse-2"
                    >
                        {title}
                    </button>
                </h2>
                <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2"
                    data-parent="#accordionExample2"
                >
                    <div className="accordion-body">
                            <h6>Select a verse</h6>
                            {children}
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Chapter
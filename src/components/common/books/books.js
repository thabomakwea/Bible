import React from 'react'

const Books = ({ children, title, data }) => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <section className="container testaments">
                        <h2>{title}</h2>
                        <div className="row">
                            {children}
                        </div>
                    </section>

                </div>
                {/* <div className="col-4"></div> */}
            </div>

        </section>
    )
}

export default Books
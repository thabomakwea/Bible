import * as React from "react"

const DailyVerse = ({title}) => {
    return (
        <section className="container">
            <h2>{title}</h2>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>A well-known quote, contained in a blockquote element.</p>
                                <footer className="blockquote-footer">Genesis <cite title="Source Title">Chapter 1 verse 1</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>A well-known quote, contained in a blockquote element.</p>
                                <footer className="blockquote-footer">Genesis <cite title="Source Title">Chapter 1 verse 1</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>A well-known quote, contained in a blockquote element.</p>
                                <footer className="blockquote-footer">Genesis <cite title="Source Title">Chapter 1 verse 1</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailyVerse

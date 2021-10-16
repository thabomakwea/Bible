import * as React from "react"
import Layout from "../../../components/layouts/layout"
import Chapter from "../../../components/common/chapter/chapter"
import "./1.css"
const Chapter_1 = ({location}) => {
    console.log(location)
    return (
        <Layout> 
            <div className="container chapter">
                <div className="row">
                    <div className="col-8">
                        <h1>Genesis 1</h1>
                        {
                            Array(30).fill(1).map((item, i) =>

                                <p> <span>{i}</span> And it came to pass as they journeyed from the east, that they found a plain in the land of Shinar, and dwelt there.</p>
                            )
                        }

                    </div>
                    <div className="col-4">
                        <h1>Chapters</h1>
                        {
                            Array(30).fill(1).map((item, i) =>
                                <Chapter key={i} title={i + 1} />
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Chapter_1

import React from 'react'
import { Link } from "gatsby"

const Breadcrumb = ({ testament, chapter}) => {
    const breadcrumbs = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: testament,
            link: testament ?  '/kjv21' + '/' + testament.toLowerCase() : ''
        },
        {
            title: chapter,
            link: testament ?  '/kjv21' + '/' + testament.toLowerCase() + '/' + chapter : ''
        }
    ]
       
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {
                        testament ?
                            breadcrumbs.map((breadcrumb, i) =>
                                <li key={i} className="breadcrumb-item">
                                    <Link to={breadcrumb.link }>
                                        { breadcrumb.title }
                                    </Link> 
                                </li>
                            )
                        :
                        ''

                    }
                </ol>
            </nav>

        </div>
    )
}

export default Breadcrumb

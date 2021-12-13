import React from 'react';
import { Link } from "gatsby"

const ResultsSearch = ({ posts, loading, url }) => {
    console.log('posts', posts)
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="search">
            <ul className="results">
            
                {
                    posts.map(result => (
                        <li key={result.id}>
                        <span className="heading">{result.book + ' ' + result.chapter + ':' + result.verse}</span>
                        <span className="text">{result.text}</span>
                        <Link to={url + '/kjv21/' + result.book.toLowerCase() + '/' + result.chapter}>
                            <span className="link">{url + '/kjv21/' + result.book.toLowerCase() + '/' + result.chapter }</span>
                        </Link>
                        </li>
                    ))
                }
                
            </ul>
       </div>
    );
};

export default ResultsSearch;
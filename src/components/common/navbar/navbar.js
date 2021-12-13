import React from 'react'

import { FaCross } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const NavBar = ({ children }) => {
   
    const [query, setQuery] = useState("")
    const data = useStaticQuery(graphql`
        query {
            localSearchPages {
                index
                store
            }
        }
    `)
    const { index, store } = data.localSearchPages
    const results = useFlexSearch(
        query,
        index,
        store,
        {
            limit: 5,
            suggest: true
        }
    )
    // console.log(localSearchPages)
    console.log(results)
    return (
        <nav className = "navbar fixed-top  navbar-dark bg-dark" >
            <div className="container">
                <div className="col-4">
                    <Link to="/" className="navbar-brand text-color-black">Bibleway</Link>
                    {/* <Link to="/" className="navbar-brand"> App</Link> */}
                </div>
                <div className="col-4 search">
                    
                    <form action="/search">
                        <div className="input-group">
                            <input 
                                className="form-control" 
                                id="search"
                                name="q"
                                type="search"
                                placeholder="Search holy bibles"
                                value={query}
                                onChange={e => {
                                    // navigate(
                                    //     e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
                                    // )
                                    setQuery(e.target.value)
                                }}
                            />
                            <div className ="input-group-append">
                                <button className="btn btn-danger" type="submit"><FaSearch /></button>
                            </div>
                        </div>
                    </form>
                    
                    {
                        results.length > 0 ?
                            <ul>
                                {results.map(result => (
                                    <li key={result.id}>
                                        <span className="heading">{result.book + ' ' + result.chapter + ':' + result.verse}</span>
                                        <span className="text">{result.text}</span>
                                    </li>
                                ))}
                            </ul>
                        : '' 
                    }
                </div>
                <div className="col d-flex justify-content-end ">
                    <button type="button" className="btn btn-dark me-2">
                        Donate
                    </button>
                    <button type="button" className="btn btn-dark me-2">
                        How to use
                    </button>
                    <button type="button" className="btn btn-dark me-2">
                        Bibles
                    </button>
                    {/* <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><GiHamburgerMenu /></button> */}
                    <DropdownButton align="end" title={<GiHamburgerMenu />} id="dropdown-menu-align-end" variant="dark"> 
                        <Dropdown.Item eventKey="1">21st Century King James Version (KJ21)</Dropdown.Item>
                        <Dropdown.Item eventKey="2">American Standard Version (ASV)</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Amplified Bible (AMP)</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Amplified Bible, Classic Edition (AMPC)</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            {/* {query ? results : '' } */}
           
        </nav>
    )
}

export default NavBar

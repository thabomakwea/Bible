import React from 'react'

import { FaQuestion } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from "gatsby"

const NavBar = ({ children }) => {
    return (
        <nav className = "navbar fixed-top  navbar-dark bg-dark" >
            <div className="container">
                <div className="col-3">
                    <Link to="/" className="navbar-brand">Bible</Link>
                </div>
                <div className="col-5">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search bible e.g. God" />
                        <div className ="input-group-append">
                            <button className="btn btn-danger" type="button"><FaSearch /></button>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-end ">
                    <button type="button" className="btn btn-dark me-2">
                        Donate
                    </button>
                    <button type="button" className="btn btn-dark me-2">
                        Help 
                    </button>
                    <button className="btn btn-dark" type="button"><GiHamburgerMenu /></button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
import React from 'react'

import { FaCross } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from "gatsby"

const NavBar = ({ children }) => {
    return (
        <nav className = "navbar fixed-top  navbar-dark bg-dark" >
            <div className="container">
                <div className="col-4">
                    <Link to="/" className="navbar-brand text-color-black">Holy Bibles</Link>
                    {/* <Link to="/" className="navbar-brand"> App</Link> */}
                </div>
                <div className="col-4">
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
        </nav>
    )
}

export default NavBar
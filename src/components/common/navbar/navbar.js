import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
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
                    <div className="scoial-icons">
                        <button type="button" className="btn btn-danger me-2"><FaTwitter /></button>
                        <button type="button" className="btn btn-danger me-2"><FaFacebookF /></button>
                        <button type="button" className="btn btn-danger me-2"><FaInstagram /></button>
                        <button type="button" className="btn btn-light me-2"><FaGooglePlay /></button>
                        <button type="button" className="btn btn-light"><FaApple /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
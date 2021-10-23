import React from 'react'
import { FaHome, FaQuestion } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { BsFillGridFill  } from 'react-icons/bs';

const NavbarBottom = () => {
    return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <div className="row w-100">
                    <div className="col-6">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item dropup me-2">
                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-light">
                                        <FaHome />
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item dropup me-2">
                                <div className="btn-group dropup">
                                    
                                </div>
                            </li>
                            <li className="nav-item dropup me-2">
                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsFillGridFill /> Verse
                                    </button>
                                    <ul className="dropdown-menu">
                                        - Dropdown menu links --
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item dropup">
                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsFillGridFill /> Chapter
                                    </button>
                                    <ul className="dropdown-menu">
                                        - Dropdown menu links --
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="col-6 ">
                        <div className="scoial-icons d-flex justify-content-end">
                            <button type="button" className="btn btn-danger me-2"><FaTwitter /></button>
                            <button type="button" className="btn btn-danger me-2"><FaFacebookF /></button>
                            <button type="button" className="btn btn-danger me-2"><FaInstagram /></button>
                            <button type="button" className="btn btn-light me-2"><FaGooglePlay /></button>
                            <button type="button" className="btn btn-light"><FaApple /></button>
                        </div>
                    </div>
                </div>
                

            </div>
        </nav>
    )
}

export default NavbarBottom

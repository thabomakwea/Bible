import React from 'react'
import { FaHome, FaQuestion } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { ImAndroid } from 'react-icons/im';
import { BsFillGridFill  } from 'react-icons/bs';
import Chapter from '../chapter/chapter'
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby';
const NavbarBottom = ({ testament, chapter, numbers, totalChapters, book, setVerse, selectedVerse, hideBottomNav}) => {
    const [modalHeader, setModalHeader] = useState('');
    const [buttons, setButtons] = useState(numbers);
    const [isVerse, setIsVerse] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    
    }
    const handleShow = (change) => { 
        setShow(true);
        change ? setModalHeader('Select a verse') : setModalHeader('Select a chapter')
        change ? setButtons(numbers) : setButtons(totalChapters)
        change ? setIsVerse(true) : setIsVerse(false)
    }

    useEffect(() => {
    }, [isVerse])
    return (
        <>
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <div className="row w-100">
                    <div className="col-6">
                        {
                            !hideBottomNav
                            ?
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item dropup me-2">
                                        <div className="btn-group dropup">
                                            <Link to="/">
                                                <button type="button" className="btn btn-dark">
                                                    <FaHome />
                                                </button>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropup me-2">
                                        <div className="btn-group dropup">
                                            
                                        </div>
                                    </li>
                                    <li className="nav-item dropup me-2">
                                        <div className="btn-group dropup">
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ () => handleShow(true) }>
                                                <BsFillGridFill /> Verses
                                            </button>
                                        </div>
                                    </li>

                                    <li className="nav-item dropup">
                                        <div className="btn-group dropup">
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleShow(false)  }>
                                                <BsFillGridFill /> Chapters
                                            </button>
                                        </div>
                                    </li>

                                </ul>
                            :
                            ''
                        }
                    </div>
                    <div className="col-6 ">
                        {/* Social Icons */}
                        <div className="scoial-icons d-flex justify-content-end">
                            <button type="button" className="btn btn-danger me-2"><FaTwitter /></button>
                            <button type="button" className="btn btn-danger me-2"><FaFacebookF /></button>
                            <button type="button" className="btn btn-danger me-2"><FaInstagram /></button>
                            <button type="button" className="btn btn-dark me-2"><ImAndroid /></button>
                            <button type="button" className="btn btn-dark"><FaApple /></button>
                        </div>
                    </div>
                </div>
            </div>
           
        </nav>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title> {modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {

                        Array(buttons).fill(1).map((item, i) => 

                            !isVerse ?
                                <Chapter key={i} title={i + 1} chapter={chapter} book={book} isVerse={isVerse} />
                            :
                                <span onClick={handleClose}>
                                    <Chapter key={i} title={i + 1} chapter={chapter} book={book} isVerse={isVerse} setVerse={setVerse} selectedVerse={selectedVerse} />
                                </span>

                        )
                    }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
     </>   
    )
}

export default NavbarBottom

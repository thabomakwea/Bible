import React from 'react'
import Chapter from '../chapter/chapter'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { BsFillGridFill } from 'react-icons/bs';

const NumberSelector = ({ title, numbers, chapter, book, isVerse, setVerse, primary, selectedVerse }) => {
    // const [isOpen, setIsOpen] = useState(isVerse ? true : false);
    const [isOpen, setIsOpen] = useState(true);
    let defaultComponent = primary
    let selectorMessage = ''
    const chevronUp = <FaChevronUp />
    const chevronDown = <FaChevronDown />
   
    useEffect(() => {
    }, [isOpen])

    useEffect(() => {
    }, [defaultComponent])

    return (
        <>
            <div className="alert alert-danger" role="alert">
                { 
                    isVerse ?
                        <span>  <strong>{book}</strong> chapter <strong>{chapter}</strong> has <strong>{numbers}</strong> verses </span>
                        // selectorMessage = book + ' chapter ' + chapter + ' has ' + numbers + ' verses ' ;
                    :
                        <span>  <strong>{book}</strong> has <strong>{numbers}</strong> chapters </span>
                        // selectorMessage = book + ' has ' + numbers + ' chapters '
                }
            </div>
            <h3 className="mb-3"> 
                
                <button 
                    className="btn btn-danger"
                    onClick={() => {
                        setIsOpen(!isOpen)
                        defaultComponent = false
                    }}
                >
                    <BsFillGridFill />  &nbsp;
                    { title } &nbsp;
                    { isOpen ? chevronDown : chevronUp  }
                </button>
            </h3>
            {
               
                Array((isOpen) ? numbers : 0).fill(1).map((item, i) =>
                    !isVerse ?
                        <Chapter key = { i } title = { i + 1 } chapter = { chapter } book = { book } isVerse = { isVerse }/>
                    :
                        <Chapter key={i} title={i + 1} chapter={chapter} book={book} isVerse={isVerse} setVerse={setVerse} selectedVerse={selectedVerse } />
                )
            }
        </>
    )
}

export default NumberSelector

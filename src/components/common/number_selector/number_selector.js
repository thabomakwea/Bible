import React from 'react'
import Chapter from '../chapter/chapter'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { BsFillGridFill } from 'react-icons/bs';

const NumberSelector = ({ title, numbers, chapter, book, isVerse, setVerse, primary }) => {
    const [isOpen, setIsOpen] = useState(false);
    let defaultComponent = primary
    let selectorMessage = ''
    const chevronUp = <FaChevronUp />
    const chevronDown = <FaChevronDown />
    if (isVerse) { 
        selectorMessage = book + ' chapter ' + chapter + ' has ' + numbers + ' verses ' 
    } else {
        selectorMessage = book + ' has ' + numbers + ' chapters '
    }
    useEffect(() => {
        // console.log(isOpen)
    }, [isOpen])

    useEffect(() => {
        console.log(defaultComponent)
    }, [defaultComponent])
    // let button = <FaChevronDown />
    
    // const setSelector = (result) => {
    //     selector = result;
    // }
    
    return (
        <>
            <div class="alert alert-danger" role="alert">
                { selectorMessage }
            </div>
            <h3> 
                
                <button 
                    className="btn btn-dark"
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
                        <Chapter key={i} title={i + 1} chapter={chapter} book={book} isVerse={isVerse} setVerse={ setVerse } />
                )
            }
        </>
    )
}

export default NumberSelector

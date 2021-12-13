import React from 'react';
import PageItem from 'react-bootstrap/PageItem'
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationSearch = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const [page, setPage] = React.useState(1);
    const count = (totalPosts / 40).toFixed(0)
        // const [showPrev, setPrev] = useState(false);
        // const [showNext, setNext] = useState(false);
        // const pageNumbers = [];

        // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        //     pageNumbers.push(i);
        // }

        // const prev = () => (
        //     <a onClick={() => paginate(currentPage - 1)} >
        //         Prev
        //     </a>
        // );
        // const next = () => (
        //     <a onClick={() => paginate(currentPage + 1)} >
        //         Next
        //     </a>
        // );

        // useEffect(() => {
        //     if (currentPage - 1 > 0) {
        //         setPrev(true);
        //     } else {
        //         setPrev(false);
        //     }

        //     if (currentPage !== pageNumbers.length) {
        //         setNext(true);
        //     } else {
        //         setNext(false);
        //     }
        // }, [currentPage, pageNumbers.length]);

        // const liRender = number => (
        //     <li key={number} className="page-item">
        //         <a onClick={() => paginate(number)}  className="page-link">
        //             {number}
        //         </a>
        //     </li>
        // );

        // return (
        //     <nav>
        //         {showPrev && prev()}
        //         <ul className="pagination">
        //             {pageNumbers.map(number => {
        //                 if (currentPage === number) {
        //                     return (
        //                         <li key={number} className="page-item">
        //                             <a
        //                                 onClick={() => paginate(number)}
                                        
        //                                 className="page-link  page-item-active active"
        //                             >
        //                                 {number}
        //                             </a>
        //                         </li>
        //                     );
        //                 }

        //                 return liRender(number);
        //             })}
        //         </ul>
        //         {showNext && next()}
        //     </nav>
        // );
    const handleChange = (event, value) => {
        setPage(value);
        paginate(value)
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={count} page={page} onChange={handleChange} />
        </Stack>
    );
    };


export default PaginationSearch;
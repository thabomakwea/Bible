import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
import Seo from "../components/layouts/seo"
import { graphql, useStaticQuery } from 'gatsby'
import Spacing from "../components/common/spacing/spacing"
import ChapterHeader from "../components/common/chapter-header/chapter_header"
import * as queryString from "query-string"
import { useState, useEffect } from 'react';
import { useFlexSearch } from "react-use-flexsearch"
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import ResultsSearch from "../components/common/results-search/results-search"
import PaginationSearch from "../components/common/pagination-search/pagination-search"

const Search = ({ location }) => {
  const { q } = queryString.parse(location.search)
  const [query, setQuery] = useState(q || "")
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(40);
  let res = null;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      res = await results
      setPosts(res);
      setLoading(false);
    };

    fetchPosts();
  }, [posts]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
      suggest: true
    }
  )
  // res = results
  // console.log('results', results)
  return (
    <Layout
      className="testament"
      hideBottomNav={true}
      testament={'Search'}
      chapter={query}
    >
      <div className='container mt-5'>
        <div className="col-7">
          <ChapterHeader
            darkText={'Search '}
            normalText={ 'Results'}
          />
          <p>Found {posts.length} results for the term {query}</p>
          <ResultsSearch posts={currentPosts} loading={loading} />
          <PaginationSearch
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
            url={location.origin }
          />
        </div>
      </div>
    </Layout>

  //   <Layout
  //     className="testament"
  //      hideBottomNav={true}
  //   >
  //     <Spacing></Spacing>
  //     <div className="container search">
  //       <div className="row">
  //         <ChapterHeader
  //           darkText={'Search '}
  //           normalText={ 'Results'}
  //         />

  //       </div>
  //       <Spacing></Spacing>
  //       <div className="row">
  //         <div className="col-8">
            // <ul className="results">

            //   {
            //     results.length > 0 ?
            //       <ul>
            //         {results.map(result => (
            //           <li key={result.id}>
            //             <span className="heading">{result.book + ' ' + result.chapter + ':' + result.verse}</span>
            //             <span className="text">{result.text}</span>
            //             <Link to={location.origin + '/kjv21/' + result.book.toLowerCase() + '/' + result.chapter}>
            //               <span className="link">{location.origin + '/kjv21/' + result.book.toLowerCase() + '/' + result.chapter }</span>
            //             </Link>
            //           </li>
            //         ))}
            //       </ul>
            //       : ''
            //   }

            // </ul>
  //           <Pagination>{items}</Pagination>
  //         </div>
  //         <div className="col-4"></div>
  //       </div>
  //     </div>
   
  // </Layout>
  )
}

export default Search

// export const query = graphql`
//   query MyQuery {
//   allWpPost {
//     nodes {
//       title
//     }
//   }
// }

// ` 
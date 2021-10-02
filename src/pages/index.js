import * as React from "react"
import { useState, useEffect} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Layout from "../components/layouts/layout"
import Seo from "../components/layouts/seo"
import Tile from "../components/common/tile/tile"
import Book from "../components/common/book/book"
import Chapter from "../components/common/chapter/chapter"
import Verse from "../components/common/verse/verse"

const IndexPage = ({ data }) => {

  const [selectedVerse, setSelectedVerse] = useState();

  return (
    <Layout>
      {
        data.allKjv21.edges.map(({node}, id) => (
          <Book 
            key={id}
            title={node.id}
            data={node}
          >
            <Chapter 
              title = "Chapter 1"
              data={node.childrenChapter1}
            >
              <Verse 
                verse={selectedVerse}
              ></Verse>
              {
                node.childrenChapter1.map(({ verse }, id) => (
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    key={id}
                    onClick={()=> {
                      setSelectedVerse(verse)
                    }}
                  >
                      {id}
                  </button>
                ))
              }
            </Chapter>
          </Book>
        ))
      }
    </Layout>
    )
  }

export default IndexPage

export const query = graphql`
  query MyQuery {
  allKjv21 {
    edges {
      node {
        id
        childrenChapter1 {
          id
          raw
          verse
        }
      }
    }
  }
}

` 
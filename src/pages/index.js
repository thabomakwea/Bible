import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layouts/layout"
import Spacing from "../components/common/spacing/spacing"
import DailyVerse from "../components/common/daily-verse/daily-verse"
import Books from "../components/common/books/books"
import Book from "../components/common/book/book"
import _, { map } from 'underscore';

const IndexPage = ({ data }) => {
  const chapters = {
    genesis: data.allGenesis.nodes.filter((verse) => { return verse.chapter == "1" })
  }
  const books = {
    newTestament: [
      {
        title: "Genesis",
        total: data.allGenesis.nodes.length
      },
      {
        title: "Exodus",
        total: data.allGenesis.nodes.length
      },
      {
        title: "Leviticus",
        total: 50
      },
      {
        title: "Numbers",
        total: 50
      },
      {
        title: "Deuteronomy",
        total: 50
      },
      {
        title: "Joshua",
        total: 50
      },
      {
        title: "Judges",
        total: 50
      },
      {
        title: "Ruth",
        total: 50
      },
      {
        title: "1 Samuel",
        total: 50
      },
      {
        title: "2 Samuel",
        total: 50
      },
      {
        title: "1 Kings",
        total: 50
      },
      {
        title: "2 Kings",
        total: 50
      },
      {
        title: "1 Chronicles",
        total: 50
      },
      {
        title: "2 Chronicles",
        total: 50
      },
      {
        title: "Ezra",
        total: 50
      },
      {
        title: "Nehemiah",
        total: 50
      },
      {
        title: "Esther",
        total: 50
      },
      {
        title: "Job",
        total: 50
      },
      {
        title: "Psalms",
        total: 50
      },
      {
        title: "Proverbs",
        total: 50
      },
      {
        title: "Ecclesiastes",
        total: 50
      },
      {
        title: "Song of Songs",
        total: 50
      },
      {
        title: "Isaiah",
        total: 50
      },
      {
        title: "Jeremiah",
        total: 50
      },
      {
        title: "Lamentation",
        total: 50
      },
      {
        title: "Ezekiel",
        total: 50
      },
      {
        title: "Daniel",
        total: 50
      },
      {
        title: "Hosea",
        total: 50
      },
      {
        title: "Joel",
        total: 50
      },
      {
        title: "Amos",
        total: 50
      },
      {
        title: "Obadiah",
        total: 50
      },
      {
        title: "Jonah",
        total: 50
      },
      {
        title: "Micah",
        total: 50
      },
      {
        title: "Nahum",
        total: 50
      },
      {
        title: "Habakkuk",
        total: 50
      },
      {
        title: "Zephaniah",
        total: 50
      },
      {
        title: "Haggai",
        total: 50
      },
      {
        title: "Zechariah",
        total: 50
      },
      {
        title: "Malachi",
        total: 50
      },
      
    ],
    oldTestament: [
      {
        title: "Matthew",
        total: data.allGenesis.nodes.length
      },
      {
        title: "Mark",
        total: data.allGenesis.nodes.length
      },
      {
        title: "Luke",
        total: 50
      },
      {
        title: "John",
        total: 50
      },
      {
        title: "Acts",
        total: 50
      },
      {
        title: "Romans",
        total: 50
      },
      {
        title: "1 Corinthians",
        total: 50
      },
      {
        title: "2 Corinthians",
        total: 50
      },
      {
        title: "Galatians",
        total: 50
      },
      {
        title: "Ephesians",
        total: 50
      },
      {
        title: "Philippians",
        total: 50
      },
      {
        title: "Colossians",
        total: 50
      },
      {
        title: "1 Thessalonians",
        total: 50
      },
      {
        title: "2 Thessalonians",
        total: 50
      },
      {
        title: "1 Timothy",
        total: 50
      },
      {
        title: "2 Timothy",
        total: 50
      },
      {
        title: "Titus",
        total: 50
      },
      {
        title: "Philemon",
        total: 50
      },
      {
        title: "Hebrews",
        total: 50
      },
      {
        title: "James",
        total: 50
      },
      {
        title: "1 Peter",
        total: 50
      },
      {
        title: "2 Peter",
        total: 50
      },
      {
        title: "1 John",
        total: 50
      },
      {
        title: "2 John",
        total: 50
      },
      {
        title: "3 John",
        total: 50
      },
      {
        title: "Jude",
        total: 50
      },
      {
        title: "Revelation",
        total: 50
      }

    ]

  }

  chapters.genesis = _.sortBy(chapters.genesis, function (obj) { return +obj.verse })
  console.log('avg', data.allGenesis.nodes )
  return (
    <Layout 
      className="testament"
      hideBottomNav = {true}
    >
      <Spacing></Spacing>
      <Books title = "New testament">
        {

          books.newTestament.map((el, i) =>
            <Book key={i} title={el.title} count={el.total} data={el} colSize={3} ></Book>
          )
        }
      </Books>
      <Spacing></Spacing>
      <Books title="Old testament">
        {

          books.oldTestament.map((el, i) =>
            <Book key={i} title={el.title} count={el.total} colSize={3}></Book>
          )
        }
      </Books>
      <Spacing></Spacing>
      <DailyVerse title="Prayers selected for you"></DailyVerse>
      <Spacing></Spacing>
    </Layout>
    )
  }

export default IndexPage

export const query = graphql`
query MyQuery {
  allGenesis {
    nodes {
      book
      bible
      text
      verse
      chapter
    }
  }
  allExodus {
    nodes {
      book
      bible
      text
      verse
      chapter
    }
  }
}

` 
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../common/header/header"
import "./layout.css"
import NavBar from "../common/navbar/navbar"
import Spacing from "../common/spacing/spacing"
import DailyVerse from "../common/daily-verse/daily-verse"
import Books from "../common/books/books"
import Footer from "../common/footer/footer"
const Layout = ({ children }) => {
  
  return (
    <>
      <NavBar></NavBar>
      <Spacing></Spacing>

      <Spacing></Spacing>

      <Spacing></Spacing>
      
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Genesis</a></li>
            <li class="breadcrumb-item active" aria-current="page">1</li>
          </ol>
        </nav>
      </div>
      
      
      {children}
      <Spacing></Spacing>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

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
import Breadcrumb from "../common/breadcrumb/breadcrumb"
import Footer from "../common/footer/footer"
import NavbarBottom from "../common/navbar_bottom/navbar_bottom"

const Layout = ({ children, testament, chapter }) => {
  
  return (
    <>
      <NavBar />

      <Spacing />
      <Spacing />
      <Spacing />
      
      <Breadcrumb 
        testament = { testament }
        chapter = { chapter }
      />

      {children}

      <Spacing />
      
      <Footer />
      <NavbarBottom />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

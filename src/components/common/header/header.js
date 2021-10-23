import * as React from "react"
import { FaBookMedical } from 'react-icons/fa';

import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <FaBookMedical />
          <Link to="/page-2" className="navbar-brand"> { siteTitle } </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                  <Link to="/page-2"className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
                  <Link to="/page-2"className="nav-link">Links</Link>
            </li>
            <li className="nav-item">
                  <Link to="/page-2"className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

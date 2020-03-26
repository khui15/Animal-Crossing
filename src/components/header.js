import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaCode, FaSave, FaSeedling, FaMugHot } from 'react-icons/fa';


import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <header
    className="header"
  >
    <div className="outer-container">
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className = "section">
        <h1 className="resume-link">
          <Link to="/resume/" ><FaSave/></Link>
          <div className="link-title">
            Resume
          </div>
        </h1>
        <h1>
        <Link to="/resume/"><FaSeedling/></Link>
        <div className="link-title">
            Volunteering
          </div>
        </h1>
        <h1>
        <Link to="/resume/"><FaCode/></Link>
        <div className="link-title">
            Projects
          </div>
        </h1>
        <h1>
        <Link to="/resume/"><FaMugHot/></Link>
        <div className="link-title">
            Blog
          </div>
        </h1>
      </div>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

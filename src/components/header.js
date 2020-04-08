import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FaCode, FaSave, FaSeedling, FaMugHot, FaHome } from 'react-icons/fa';


const Header = ({ siteTitle }) => (
  <header
    className="header"
  >
    <div className="outer-container">
    <div className="container">
      <h1 className="main-title" style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className = "section">
        <h1>
        <Link to="/" className="home-link"><FaHome/></Link>
        </h1>
        <h1 className="resume-link">
          <Link to="/resume/" ><FaSave/></Link>
          <div className="link-title">
          <Link to="/resume/">Resume</Link>
          </div>
        </h1>
        <h1>
        <Link to="/volunteering/"><FaSeedling/></Link>
        <div className="link-title">
        <Link to="/volunteering/">Volunteering</Link>
          </div>
        </h1>
        <h1>
        <Link to="/projects/"><FaCode/></Link>
        <div className="link-title">
        <Link to="/projects/">Projects</Link>
          </div>
        </h1>
        <h1>
        <Link to="/blog/"><FaMugHot/></Link>
        <div className="link-title blog">
        <Link to="/blog/">Blog</Link>
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

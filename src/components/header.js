import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import "./style.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="head">
      <h1>
        <Link className="title" to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="list">
        <ul className="menu">
            <li className="menu__single">
                <a href="#" className="init-bottom">NODENS</a>
                <ul className="menu__second-level">
                    <li><Link to="/">VEGA</Link></li>
                    <li><Link to="/joe">JOE</Link></li>
                </ul>
            </li>
        </ul>
        <ul className="menu">
            <li className="menu__single">
                <a href="#" className="init-bottom">C</a>
                <ul className="menu__second-level">
                    <li><Link to="/c-follower">FOLLOWER</Link></li>
                    <li><Link to="/c-works">WORKS</Link></li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

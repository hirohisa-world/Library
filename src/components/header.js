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
                    <li><a href="/">VEGA</a></li>
                    <li><a href="/joe">JOE</a></li>
                </ul>
            </li>
        </ul>
        <ul className="menu">
            <li className="menu__single">
                <a href="#" className="init-bottom">C</a>
                <ul className="menu__second-level">
                    <li><a href="/c-follower">FOLLOWER</a></li>
                    <li><a href="/c-works">WORKS</a></li>
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

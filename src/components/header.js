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
      <span className="icon-Twitter_Social_Icon_Circle_White"></span>
      <div className="test">
        <ul className="menu">
            <li className="menu__single">
                <a href="#" className="init-bottom">NODENS</a>
                <ul className="menu__second-level">
                    <li><a href="/">VEGA</a></li>
                    <li><a href="#">JOE</a></li>
                </ul>
            </li>
        </ul>
        <ul className="menu">
            <li className="menu__single">
                <a href="#" className="init-bottom">C</a>
                <ul className="menu__second-level">
                    <li><a href="/">WORLD</a></li>
                    <li><a href="#">CHARACTER</a></li>
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

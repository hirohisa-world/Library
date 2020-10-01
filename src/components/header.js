import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import "./style.css"

const Header = () => (
  <header class="header">
    <div class="logo">LIBRARY</div>

    <div class="drawer">

      <input type="checkbox" id="drawer-check" class="drawer-hidden" />

      <label for="drawer-check" class="drawer-open"><span></span></label>

      <nav class="drawer-content">
        <ul class="drawer-list">
          <div className="planTitle">● HUDSON</div>
          <li class="drawer-item">
            <Link to="/"> ASTER</Link>
          </li>
          <li class="drawer-item">
            <Link to="/smiley"> SMILEY</Link>
          </li>
          <div className="border" />
          <div className="planTitle">● NODENS</div>
          <li class="drawer-item">
            <Link to="/vega"> VEGA</Link>
          </li>
          <li class="drawer-item">
            <Link to="/joe"> JOE</Link>
          </li>
          <li class="drawer-item">
            <Link to="/sadd"> SADD</Link>
          </li>
          <li class="drawer-item">
            <Link to="/massimo"> MASSIMO</Link>
          </li>
          <div className="border" />
          <div className="planTitle">● 任張</div>
          <li class="drawer-item">
            <Link to="/tsudu"> TSUDU</Link>
          </li>
          <div className="border" />
          <div className="planTitle">● リカ学</div>
          <li class="drawer-item">
            <Link to="/nene"> NENE</Link>
          </li>
          <div className="border" />
          <div className="planTitle">● ORIGINAL</div>
          <li class="drawer-item">
            <Link to="/c-follwer">C - FOLLOWER</Link>
          </li>
          <li class="drawer-item">
            <Link to="/c-works">C - WORKS</Link>
          </li>
        </ul>
      </nav>

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

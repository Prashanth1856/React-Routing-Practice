// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-icon"
      />
      <p className="wave-text">Wave</p>
    </div>
    <ul className="menu-container">
      <li className="menu">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="menu">
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li className="menu">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

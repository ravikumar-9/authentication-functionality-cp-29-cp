// Write your JS code here

import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  console.log(props)
  return (
    <>
      <nav className="navbar-menu">
        <ul className="menu-items">
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-link">About</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default withRouter(Header)

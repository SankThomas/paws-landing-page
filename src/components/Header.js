import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <Logo />
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="btn-cta">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

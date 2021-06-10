import { NavLink } from "react-router-dom"
import Logo from "./Logo"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <Logo />
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <button className="btn-cta">Get Started</button>
        </div>
      </footer>
    </>
  )
}

export default Footer

import { NavLink } from "react-router-dom"
import logo from "../images/logo.svg"

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img src={logo} alt="Welcome to Paws" />
      </NavLink>
    </>
  )
}

export default Logo

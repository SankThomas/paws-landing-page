import { NavLink } from "react-router-dom"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <h1>Project Management, Accounting, and Web Services</h1>
        <p>Dashwood contempt on mr unlocked resolved provided of of.</p>
        <NavLink to="/contact-us" className="btn-cta">
          Contact Us
        </NavLink>
      </section>
    </>
  )
}

export default Showcase

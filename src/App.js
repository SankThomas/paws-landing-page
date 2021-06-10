import { BrowserRouter, Route, Switch } from "react-router-dom"

// Components
import Header from "./components/Header"
import Showcase from "./components/Showcase"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import GetStarted from "./components/GetStarted"
import Footer from "./components/Footer"

// Pages
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Error from "./pages/Error"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Showcase />
          <Services />
          <Testimonials />
          <GetStarted />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

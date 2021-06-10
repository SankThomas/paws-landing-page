import { useState } from "react"
import { services } from "../data/services"

const Services = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(services)

  return (
    <section className="cards">
      {cards.map(({ id, title, icon, desc }) => (
        <div key={id}>
          <article>
            <p>{icon}</p>
            <h3>{title}</h3>
          </article>
          <p>{desc}</p>
          <button className="btn-blue">Choose</button>
        </div>
      ))}
    </section>
  )
}

export default Services

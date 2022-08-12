import React from "react"
import Slide from "react-reveal/Slide"

export default function Section({ children, id }) {
  return (
    <Slide bottom>
      <section id={id}>
        <h2 className="mb-5">{id}</h2>
        {children}
      </section>
    </Slide>
  )
}

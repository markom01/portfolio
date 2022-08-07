import React from "react"
import Slide from "react-reveal/Slide"

export default function Section({ children, id }) {
  return (
    <Slide bottom>
      <section id={id}>{children}</section>
    </Slide>
  )
}

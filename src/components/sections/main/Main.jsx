import React from "react"
import Content from "./content/Content"
import Navigation from "./navigation/Navigation"

export default function Main() {
  return (
    <div className="row">
      <Navigation />
      <Content />
    </div>
  )
}

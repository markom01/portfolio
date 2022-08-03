import React from "react"
import Hero from "./hero/Hero"
import Footer from "../../../../components/sections/footer/Footer"

export default function Content() {
  return (
    <div className="col-10 col-md-11 py-4 ms-auto h-100">
      <div className="glass mx-3 rounded ps-3 h-100">
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

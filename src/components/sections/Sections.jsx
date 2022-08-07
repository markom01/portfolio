//! Folder refactor
import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import Scrollbar from "@myBlocks/scrollbar/Scrollbar"
import Navigation from "@sections/navigation/Navigation"
import Hero from "@sections/hero/Hero"
import Footer from "@sections/footer/Footer"

export default function Sections() {
  const [scrolled, setScrolled] = useState(0)
  const handleScroll = (e) => {
    const target = e.currentTarget
    const scrollTop = target.scrollTop
    const targetHeight = target.scrollHeight - target.clientHeight
    const scroll = `${(scrollTop / targetHeight) * 100}%`
    setScrolled(scroll)
  }
  return (
    <>
      <Scrollbar state={scrolled} />
      <div className={`vw-100 vh-100 py-4 d-flex`} id="main">
        <Navigation />
        <Fade>
          <div
            className={`glass mx-3 rounded px-3 h-100 w-100 text-center 
      
      `}
            id="content"
            onScroll={handleScroll}
          >
            <Hero />
            <Footer />
          </div>
        </Fade>
      </div>
    </>
  )
}

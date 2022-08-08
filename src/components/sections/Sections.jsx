//! Folder refactor
import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import Scrollbar from "@myBlocks/scrollbar/Scrollbar"
import Navigation from "@sections/navigation/Navigation"
import Hero from "@sections/hero/Hero"
import Skills from "./skills/Skills"
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
      <div className={`vw-100 vh-100 pt-4 d-flex`} id="main">
        <Navigation />
        <Fade>
          <div
            className={`glass mx-2 mx-md-3 rounded px-3 h-100 text-center 
      
      `}
            id="content"
            onScroll={handleScroll}
          >
            <Hero />
            <Skills />
            <Footer />
          </div>
        </Fade>
      </div>
    </>
  )
}

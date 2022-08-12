import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import Scrollbar from "@myBlocks/scrollbar/Scrollbar"
import Navigation from "@sections/navigation/Navigation"
import Hero from "@sections/hero/Hero"
import * as styles from "./Sections.module.sass"
import BelowTheFold from "./BelowTheFold"

export default function Sections() {
  const [scrolled, setScrolled] = useState(0)
  const handleScroll = (e) => {
    const target = e.currentTarget
    const scrollTop = target.scrollTop
    const targetHeight = target.scrollHeight - target.clientHeight
    const scroll = `${(scrollTop / targetHeight) * 100}%`
    setScrolled(scroll)
  }
  const [isWide, setIsWide] = useState(null)
  useEffect(() => {
    window.innerWidth > window.innerHeight ? setIsWide(true) : setIsWide(false)
  }, [])
  return (
    <>
      <Scrollbar state={scrolled} />
      <div
        className={`vw-100 vh-100 pt-3 d-flex ${
          isWide ? styles.pb : `flex-column-reverse`
        }`}
        id="main"
      >
        <Navigation wide={isWide} />
        <Fade>
          <div
            className={`glass mx-2  px-3  h-100 text-center 
            ${isWide ? "mx-3" : "mb-3"}
      `}
            id="content"
            onScroll={handleScroll}
          >
            <Hero />
            <BelowTheFold />
          </div>
        </Fade>
      </div>
    </>
  )
}

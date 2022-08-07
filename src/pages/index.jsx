import React, { useState, useEffect } from "react"
import "@sass/App.sass"
import { StaticImage } from "gatsby-plugin-image"
import Loader from "@myBlocks/loader/Loader"
import Sections from "@sections/Sections"

export function Head() {
  return (
    <>
      <title>Marko M | Portfolio</title>
      <meta name="description" content="Front-End Web Development" />
    </>
  )
}

export default function App() {
  const [playAnimation, setPlayAnimation] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setPlayAnimation(false)
    }, 2000)
  }, [])

  return (
    <>
      <StaticImage
        src="../images/bg.png"
        alt="Background Image"
        className="position-absolute top-50 start-50 translate-middle vw-100 vh-100"
      />
      {playAnimation ? <Loader /> : <Sections />}
    </>
  )
}

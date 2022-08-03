import React from "react"
import * as styles from "./Hero.module.sass"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <section id="hero">
      <StaticImage
        src="../../../../../images/profile-picture.png"
        className={`col ${styles.img}`}
        alt="profile-avatar"
      />
      <h1>cvwieqfy</h1>
    </section>
  )
}

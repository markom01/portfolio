import React from "react"
import * as styles from "./Hero.module.sass"

export default function Hero() {
  return (
    <section id="hero">
      <img
        src="../../../../../images/profile-picture.png"
        className={`col ${styles.img}`}
        alt="profile-avatar"
      />
      <h1>cvwieqfy</h1>
    </section>
  )
}

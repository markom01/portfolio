import React from "react"
import styles from "./Hero.module.sass"

export default function Hero() {
  return (
    <section id="hero">
      <img
        src={require("../../../../../images/profile-picture.png")}
        className={`col ${styles.img}`}
        alt="profile-avatar"
      />
    </section>
  )
}

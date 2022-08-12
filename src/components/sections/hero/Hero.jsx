import React from "react"
import * as styles from "./Hero.module.sass"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../blocks/myBlocks/button/Button"

export default function Hero() {
  return (
    <section id="home">
      <StaticImage
        src="../../../images/brand/profile-picture.png"
        className={`col ${styles.img}`}
        alt="profile-avatar"
      />
      <p>Marko Meseldžija</p>

      <h1 className="text-primary text-uppercase fw-bold">
        Frontend Web Development
      </h1>

      <div className="btns">
        <Button id="projects" variant="primary" />
        <Button id="about" variant="secondary" />
      </div>
    </section>
  )
}

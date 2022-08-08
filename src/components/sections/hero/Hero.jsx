import React from "react"
import Section from "@sections/Section"
import * as styles from "./Hero.module.sass"
import { StaticImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"

export default function Hero() {
  return (
    <Section id="hero">
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
        <Button
          variant="outline-primary"
          className="btn-outline-primary"
          size="lg"
          href="#projects"
        >
          Projects
        </Button>
        <Button
          variant="outline-secondary"
          className="btn-outline-secondary"
          size="lg"
          href="#skills"
        >
          Skills
        </Button>
      </div>
    </Section>
  )
}

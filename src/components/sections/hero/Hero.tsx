import React from "react";
import * as styles from "./Hero.module.sass";
import { StaticImage } from "gatsby-plugin-image";
import Button from "@myBlocks/button/Button";

export default function Hero() {
  return (
    <section id="hero">
      <StaticImage
        src="../../../images/brand/profile-picture.png"
        className={`col ${styles.img}`}
        alt="profile-avatar"
      />
      <p>Marko Meseldžija</p>

      <h1 className="text-primary text-uppercase fw-bold">Frontend | UI UX</h1>

      <div className="btns">
        <Button id="projects" />
        <Button secondary id="about" />
      </div>
    </section>
  );
}

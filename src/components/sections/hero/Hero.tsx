import React from "react";
import * as styles from "./Hero.module";
import { StaticImage } from "gatsby-plugin-image";
import Button from "@myBlocks/button/Button";
import Icon from "@myBlocks/icon/Icon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-between align-items-center"
    >
      <div className="row w-100 my-auto row-cols-1 gy-4 justify-content-center">
        <div className="col">
          <StaticImage
            src="../../../images/brand/profile-picture.png"
            className={`${styles.img} mb-2`}
            alt="profile-avatar"
          />
          <p>Marko Meseldžija</p>
        </div>
        <div className="col">
          <h1>Frontend | UI UX</h1>
        </div>

        <div className="btns col">
          <Button id="projects" />
          <Button secondary id="contact" />
        </div>
      </div>

      <a
        href="#projects"
        style={{ color: "var(--bs-secondary)" }}
        className="mt-5 mt-md-auto"
      >
        <span className="icon--big d-block" style={{ marginBlockEnd: "-55px" }}>
          ⌄
        </span>
        <span className="icon--bigger d-block">⌄</span>
      </a>
    </section>
  );
}

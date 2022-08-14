import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.sass";
import Fade from "react-reveal/Fade";

export default function Card({ project }) {
  return (
    <>
      <div className={`m-4 ${styles.scene}`}>
        <div className={styles.card}>
          <div
            className={`${styles.glassCard} p-3 p-md-4  d-flex flex-column justify-content-center align-items-center ${styles.card__face}`}
          >
            <StaticImage src={project.thumbnail} />
          </div>
          <div
            className={`${styles.glassCard} p-3 p-md-4  d-flex flex-column justify-content-center align-items-center ${styles.card__face} ${styles.card__faceback}`}
          >
            <Fade left cascade>
              <small>{project.description}</small>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

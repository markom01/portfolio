import React, { createElement, useState, useContext } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.sass";
import { Fade } from "react-reveal";

import { StaticImage } from "gatsby-plugin-image";
import Icon from "../../../blocks/myBlocks/icon/Icon";
import Button from "@myBlocks/button/Button";

type CardProps = Queries.ProjectsQuery["allMdx"]["nodes"][0];

export default function Card({ project }: { project: CardProps }) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className={`col ${styles.scene}`}>
      <div
        className={`h-100 w-100 position-relative my-card ${styles.card} ${
          showBack ? styles.show_back : ""
        }`}
      >
        <CardFront project={project} state={[showBack, setShowBack]} />
        <CardBack project={project} state={[showBack, setShowBack]} />
      </div>
    </div>
  );
}

interface CardSidesProps {
  project: CardProps;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export function CardFront({ project, state }: CardSidesProps) {
  const thumbnail = getImage(project.frontmatter.thumbnail);

  return (
    <div
      className={`${styles.glassCard} d-flex flex-column align-items-center position-absolute ${styles.card__face} ${styles.card__facefront}`}
    >
      {
        <Fade cascade>
          <GatsbyImage image={thumbnail} alt={project.frontmatter.title} />
          <div className="d-flex flex-column justify-content-between h-100 w-100 p-3">
            <div>
              <a href={project.frontmatter.link} className="text-white">
                {project.frontmatter.title}
                <sup className="ms-1">🔗</sup>
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-end w-100">
              <div className="row row-cols-auto g-3 me-2">
                {project.frontmatter.techStack.map(({ name, img }) => {
                  return (
                    <div
                      className="col d-flex align-items-center"
                      key={name}
                      aria-label={name}
                    >
                      <Icon src={img.publicURL} alt={name} />
                    </div>
                  );
                })}
              </div>
              <button
                className={`text-white ${styles.flip_btn}`}
                onClick={() => state[1]((s) => !s)}
                aria-label="Show More"
              >
                {`˃`}
              </button>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
}
function CardBack({ project, state }: CardSidesProps) {
  const startDate = new Date(project.frontmatter.startDate);
  const endDate = new Date(project.frontmatter.endDate);
  return (
    <div
      className={`${styles.glassCard} p-3 d-flex flex-column align-items-center position-absolute text-start ${styles.card__face} ${styles.card__faceback}`}
    >
      <Fade cascade>
        <div className="d-flex flex-column h-100">
          <h5 className="mb-2 text-white">Description</h5>
          <h6 className="mb-4">{project.frontmatter.description}</h6>
          <a
            href={project.frontmatter.details}
            className="text-white text-uppercase"
          >
            View More
          </a>
        </div>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <button
            className={styles.flip_btn}
            onClick={() => state[1]((s) => !s)}
          >
            {`˂`}
          </button>
          <h6
            aria-label="Project Duration"
            className="d-flex align-items-center mb-0"
            style={{ fontSize: "14px" }}
          >
            <span
              className="me-2 icon--small"
              style={{ marginBlockStart: "-4px" }}
            >
              🗓
            </span>
            {`${startDate.getMonth() + 1}.${startDate.getFullYear()} - ${
              endDate.getMonth() + 1
            }.${endDate.getFullYear()}`}
          </h6>
        </div>
      </Fade>
    </div>
  );
}

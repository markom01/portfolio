import React, { createElement, useState, useContext } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.sass";
import { Fade } from "react-reveal";

import { StaticImage } from "gatsby-plugin-image";
import Icon from "../../../blocks/myBlocks/Icon";
import Button from "@myBlocks/button/Button";

type CardProps = Queries.ProjectsQuery["allMdx"]["nodes"][0];

export default function Card({ project }: { project: CardProps }) {
  // const [showBack, setShowBack] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [translation, setTranslation] = useState(0);
  const handleTransform = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX } = e;
    const { right, width } = e.currentTarget.getBoundingClientRect();
    const x = right - clientX;
    const RATIO = x / width;
    // const isLeft = x < width / 2;
    // const isRight = x > width / 2;
    setTranslation(RATIO * 100);
    setRotation(RATIO * 180);
  };
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (translation < 50) {
      setRotation(0);
      setTranslation(0);
    } else {
      setRotation(180);
      setTranslation(100);
    }
  };
  return (
    <div className={`col ${styles.scene}`}>
      <div
        className={`h-100 w-100 position-relative my-card ${styles.card}`}
        onMouseMove={handleTransform}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate3d(-${translation}%, 0, 0) rotate3d(0, 1, 0, -${rotation}deg) `,
        }}
      >
        <CardFront project={project} />
        <CardBack project={project} />
      </div>
    </div>
  );
}

interface CardSidesProps {
  project: CardProps;
}


function CardFront({ project }: CardSidesProps) {
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
                <sup className="ms-1">
                  <Icon name="link-45deg" />
                </sup>
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="row row-cols-auto gx-2">
                {project.frontmatter.techStack.map(({ name, img }) => {
                  return (
                    <div
                      className="col d-flex align-items-center"
                      key={name}
                      data-tooltip={name}
                    >
                      <GatsbyImage
                        image={getImage(img)}
                        alt={name}
                        className="icon"
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className={`text-white ${styles.flip_btn}`}
                // onClick={() => 
                [1]((s) => !s)}
                data-tooltip="Show More"
              >
                <Icon name="chevron-right" />
              </button>
            </div>
          </div>
        </Fade>
      }
    </div>
  );
}
function CardBack({ project }: CardSidesProps) {
  const startDate = new Date(project.frontmatter.startDate);
  const endDate = new Date(project.frontmatter.endDate);
  return (
    <div
      className={`${styles.glassCard} p-3 d-flex flex-column align-items-center position-absolute text-start ${styles.card__face} ${styles.card__faceback}`}
    >
      <Fade cascade>
        <div className="d-flex flex-column h-100">
          <h5 className="mb-2 text-white">Description</h5>
          <h6>{project.frontmatter.description}</h6>
        </div>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <button
            className={styles.flip_btn}
          >
            <Icon name="chevron-left" />
          </button>
          <h6
            data-tooltip="Project Duration"
            className="d-flex align-items-center mb-0"
            style={{ fontSize: "14px" }}
          >
            <Icon name="calendar" className="me-2" />
            <span>
              {`${startDate.getMonth() + 1}.${startDate.getFullYear()} - ${
                endDate.getMonth() + 1
              }.${endDate.getFullYear()}`}
            </span>
          </h6>
        </div>
      </Fade>
    </div>
  );
}

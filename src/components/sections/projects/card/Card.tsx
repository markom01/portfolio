import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef } from "react";

import { ChevronSVG } from "@components/sections/contact/form/radio/Radio";

import Icon from "../../../blocks/myBlocks/icon/Icon";
import * as styles from "./Card.module";

type CardProps = Queries.ProjectsQuery["allMdx"]["nodes"][0];

export default function Card({ project }: { project: CardProps }) {
  const ref = useRef(null);
  return (
    <div className={styles.scene}>
      <article
        ref={ref}
        className={`h-100 position-relative my-card ${styles.card}`}
      >
        <CardFront project={project} container={ref} />
        <CardBack project={project} container={ref} />
      </article>
    </div>
  );
}

interface CardSidesProps {
  project: CardProps;
  container: React.RefObject<HTMLDivElement>;
}

export function CardFront({ project, container }: CardSidesProps) {
  const thumbnail = getImage(project.frontmatter.thumbnail);

  return (
    <div
      className={`${styles.glass_card} position-absolute d-flex flex-column w-100 h-100 ${styles.card__face} ${styles.card__facefront}`}
    >
      <div style={{ height: "150px" }}>
        <GatsbyImage
          className="h-100"
          image={thumbnail}
          objectPosition="top"
          alt={project.frontmatter.title}
        />
      </div>
      <div className="d-flex flex-column justify-content-between h-100 w-100 p-3">
        <a
          href={project.frontmatter.link}
          target="_blank"
          className="text-white mb-4"
        >
          {project.frontmatter.title}
          <sup className="ms-1">🔗</sup>
        </a>

        <div className="d-flex justify-content-between align-items-center w-100">
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
            onClick={() =>
              container.current.style.setProperty(
                "--card-transform",
                "translate3d(-100%, 0, 0) rotate3d(0, 1, 0, -180deg)"
              )
            }
            aria-label="Show More"
          >
            <ChevronSVG
              className="p-1 py-2"
              style={{ width: "25px", rotate: "-.25turn" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
function CardBack({ project, container }: CardSidesProps) {
  const startDate = new Date(project.frontmatter.startDate);
  const endDate = new Date(project.frontmatter.endDate);
  return (
    <div
      className={`${styles.glass_card} p-3 d-flex flex-column align-items-center position-absolute text-start ${styles.card__face} ${styles.card__faceback}`}
    >
      <div className="d-flex flex-column h-100 w-100">
        <h5 className="mb-2 text-white">Description</h5>
        <h6 className="mb-4">{project.frontmatter.description}</h6>
        <a
          href={project.frontmatter.details}
          className="text-white text-uppercase"
          target="_blank"
        >
          View More
        </a>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <button
          className={styles.flip_btn}
          onClick={() =>
            container.current.style.setProperty("--card-transform", "none")
          }
        >
          <ChevronSVG
            className="p-1 py-2"
            style={{ width: "25px", rotate: ".25turn" }}
          />
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
    </div>
  );
}

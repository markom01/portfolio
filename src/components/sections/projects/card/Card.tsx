import React, {
  createElement,
  useState,
  // , useContext
} from "react";
// import { CarouselVisibilityContext } from "@myBlocks/carousel/Carousel";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.sass";
import Fade from "react-reveal/Fade";

import { StaticImage } from "gatsby-plugin-image";
import Icon from "../../../blocks/myBlocks/Icon";
// import SVG from "../../../blocks/myBlocks/SVG/SVG";
// import Button from "@myBlocks/button/Button";
// import Carousel from "@myBlocks/carousel/Carousel";

interface CardProps {
  readonly frontmatter: {
    readonly startDate: string;
    readonly endDate: string;
    readonly link: string;
    readonly title: string;
    readonly description: string;
    readonly techStack: readonly {
      readonly name: string;
      readonly img: {};
    }[];
    readonly thumbnail: {};
  };
}

export default function Card(props: CardProps) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className={`col ${styles.scene}`}>
      <div
        className={`h-100 w-100 position-relative my-card ${styles.card} ${
          showBack ? styles.show_back : ""
        }`}
      >
        <CardFront project={props} state={[showBack, setShowBack]} />
        <CardBack project={props} state={[showBack, setShowBack]} />
      </div>
    </div>
  );
}

interface CardSidesProps {
  project: CardProps;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

function CardFront({ project, state }: CardSidesProps) {
  const thumbnail = getImage(project.frontmatter.thumbnail);
  // const [isCarouselVisibleState, setisCarouselVisibleState] = useState(false)
  return (
    <div
      className={`${styles.glassCard} d-flex flex-column align-items-center position-absolute ${styles.card__face}`}
    >
      {!state[0] && (
        <Fade cascade>
          {/* <div
          className={`w-100 h-100 d-flex justify-content-center align-items-center position-absolute ${styles.img_overlay}`}
        >
          <Button
            secondary
            // onClick={e=>setisCarouselVisibleState(true)}
          >
            <MdZoomOutMap /> Show Gallery
          </Button>
        </div> */}
          {/* <Carousel /> */}
          <GatsbyImage image={thumbnail} alt="" />
          <div className="d-flex flex-column justify-content-between h-100 w-100 p-3">
            <div>
              <a href={project.frontmatter.link} className="text-secondary">
                {project.frontmatter.title}
                <sup className="ms-1"></sup>
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="row row-cols-auto gx-1">
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
                className={`text-secondary ${styles.flip_btn}`}
                onClick={() => state[1](true)}
                data-tooltip="Show More"
              >
                <Icon name="chevron-right" />
              </button>
            </div>
          </div>
        </Fade>
      )}
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
      <>
        {state[0] && (
          <Fade cascade>
            <div className="d-flex flex-column h-100">
              <h5 className="mb-2 text-white">Description</h5>
              <h6>{project.frontmatter.description}</h6>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <button
                className={styles.flip_btn}
                onClick={() => state[1](false)}
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
        )}
      </>
    </div>
  );
}

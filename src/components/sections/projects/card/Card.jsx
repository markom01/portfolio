import React, {
  useState,
  // , useContext
} from "react";
// import { CarouselVisibilityContext } from "@myBlocks/carousel/Carousel";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Card.module.sass";
import Fade from "react-reveal/Fade";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
// import { MdZoomOutMap } from "react-icons/md";
// import Button from "@myBlocks/button/Button";
// import Carousel from "@myBlocks/carousel/Carousel";

export default function Card(props) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className={`col ${styles.scene}`}>
      <div
        className={`h-100 w-100 position-relative my-card ${styles.card} ${
          showBack ? styles.show_back : ""
        }`}
      >
        <IconContext.Provider
          value={{ color: "var(--bs-secondary)", size: "1.3rem" }}
        >
          {!showBack && (
            <CardFront {...props} state={[showBack, setShowBack]} />
          )}
          {showBack && <CardBack {...props} state={[showBack, setShowBack]} />}
        </IconContext.Provider>
      </div>
    </div>
  );
}

function CardFront({ project, i, state }) {
  // const [isCarouselVisibleState, setisCarouselVisibleState] = useState(false)
  return (
    <div
      className={`${styles.glassCard} d-flex flex-column align-items-center position-absolute ${styles.card__face}`}
    >
      {!state[0] && (
        <Fade cascade>
          <div className="position-relative">
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
            <StaticQuery
              query={graphql`
                query {
                  allImageSharp {
                    nodes {
                      gatsbyImageData
                    }
                  }
                }
              `}
              render={(data) => (
                <GatsbyImage
                  image={getImage(data.allImageSharp.nodes[i])}
                  alt=""
                />
              )}
            />
          </div>
          <div className="d-flex flex-column justify-content-between h-100 w-100 p-3">
            <div>
              <a href={project.link} className="text-secondary">
                {project.title}
                <sup className="ms-1">
                  <IconContext.Provider value={{ size: "1rem" }}>
                    <AiOutlineLink />
                  </IconContext.Provider>
                </sup>
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="row row-cols-auto gx-1">
                {project.techStack.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      className="col position-relative"
                      key={tech.name}
                      data-tooltip={tech.name}
                    >
                      <Icon />
                    </div>
                  );
                })}
              </div>
              <button
                className={`text-secondary ${styles.flip_btn}`}
                onClick={() => state[1](true)}
                data-tooltip="Show More"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
}
function CardBack({ project, state }) {
  const date = project.date;
  return (
    <div
      className={`${styles.glassCard} p-3 p-md-4  d-flex flex-column align-items-center position-absolute text-start ${styles.card__face} ${styles.card__faceback}`}
    >
      {state[0] && (
        <>
          <Fade cascade>
            <div className="d-flex flex-column h-100">
              <h5 className="mb-2 text-white">Description</h5>
              <h6>{project.description}</h6>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <button
                className={styles.flip_btn}
                onClick={() => state[1](false)}
              >
                <FiChevronLeft />
              </button>
              <h6
                data-tooltip="Project Duration"
                className="d-flex align-items-center mb-0"
                style={{ fontSize: "14px" }}
              >
                <IconContext.Provider value={{ size: "14px" }}>
                  <AiOutlineCalendar />
                </IconContext.Provider>
                <span className="ms-1">
                  {`${date[0].getMonth()}.${date[0].getFullYear()} - ${date[1].getMonth()}.${date[1].getFullYear()}`}
                </span>
              </h6>
            </div>
          </Fade>
        </>
      )}
    </div>
  );
}

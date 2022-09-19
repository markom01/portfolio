import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Filter.module.sass";

export default function Filter({ state }) {
  const data = useStaticQuery(graphql`
    query Filter {
      allMdx(
        filter: {
          frontmatter: { icons: { elemMatch: { name: { regex: "" } } } }
        }
      ) {
        nodes {
          frontmatter {
            icons {
              img {
                childImageSharp {
                  gatsbyImageData(width: 24)
                }
              }
              name
            }
          }
        }
      }
    }
  `);
  return (
    <div className="col d-flex flex-column justify-content-center">
      <small className="me-auto me-md-0 ms-md-auto mb-1">
        Filter by tech used
      </small>
      <div className="row row-cols-auto gx-1 my-1">
        {data.allMdx.nodes[0].frontmatter.icons.map((tech) => (
          <TechIcon tech={tech} state={state} key={tech.name} />
        ))}
      </div>
    </div>
  );
}

function TechIcon(props) {
  const [activeTech, setActiveTech] = useState(false);
  return (
    <button
      onClick={() => {
        activeTech
          ? props.state[1](
              props.state[0].filter((name) => name !== props.tech.name)
            )
          : props.state[1]([...props.state[0], props.tech.name]);
        setActiveTech(!activeTech);
      }}
      className="col"
    >
      <div
        className={`p-2  ${activeTech ? styles.bg_active : ""}`}
        data-tooltip={props.tech.name}
      >
        <GatsbyImage
          className="icon"
          image={getImage(props.tech.img)}
          alt={props.tech.name}
        />
      </div>
    </button>
  );
}

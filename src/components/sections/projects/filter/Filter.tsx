import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Filter.module";
import Icon from "@myBlocks/icon/Icon";

interface FilterProps {
  state: [any[], React.Dispatch<React.SetStateAction<any[]>>];
}

type tech =
  Queries.FilterQuery["allMdx"]["nodes"][0]["frontmatter"]["icons"][number];

export default function Filter({ state }: FilterProps) {
  const data = useStaticQuery<Queries.FilterQuery>(graphql`
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
                publicURL
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
      <div className={`row row-cols-auto gx-1 my-1 ${styles.icons}`}>
        {data.allMdx.nodes[0].frontmatter.icons.map((tech: tech) => (
          <TechIcon tech={tech} state={state} key={tech.name} />
        ))}
      </div>
    </div>
  );
}

function TechIcon({
  tech,
  state,
}: {
  tech: tech;
  state: FilterProps["state"];
}) {
  const [activeTech, setActiveTech] = useState(false);
  const [activeTechArray, setActiveTechArray] = state;
  return (
    <button
      onClick={() => {
        activeTech
          ? setActiveTechArray(
              activeTechArray.filter((name) => name !== tech.name)
            )
          : setActiveTechArray([...activeTechArray, tech.name]);
        setActiveTech(!activeTech);
      }}
      className="col"
    >
      <div
        className={`p-2  ${activeTech ? styles.bg_active : ""}`}
        aria-label={tech.name}
      >
        <Icon src={tech.img.publicURL} alt={tech.name} />
      </div>
    </button>
  );
}

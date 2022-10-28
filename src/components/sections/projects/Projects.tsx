import React, { useState, useEffect } from "react"; // , { useState, useContext }
// import { CarouselVisibilityContext } from "@myBlocks/carousel/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Section from "@sections/Section";
import Card from "./card/Card";

import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
// import Carousel from "@myBlocks/carousel/Carousel";

export default function Skills() {
  const [activeTechArray, setActiveTechArray] = useState([]);
  const [sort, setSort] = useState("desc");

  const data = useStaticQuery<Queries.ProjectsQuery>(graphql`
    query Projects {
      allMdx(filter: { frontmatter: { title: { regex: "" } } }) {
        nodes {
          frontmatter {
            startDate
            endDate
            link
            title
            description
            details
            techStack {
              name
              img {
                publicURL
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  `);

  type ProjectProps = Queries.ProjectsQuery["allMdx"]["nodes"][number];

  const sortProjects = (a: ProjectProps, b: ProjectProps) =>
    sort === "asc"
      ? Date.parse(a?.frontmatter?.startDate) -
        Date.parse(b?.frontmatter?.startDate)
      : Date.parse(b?.frontmatter?.startDate) -
        Date.parse(a?.frontmatter?.startDate);

  const filterProjects = (project: ProjectProps) => {
    if (!activeTechArray.length) return true;
    return activeTechArray.every((activeTech) =>
      project.frontmatter.techStack.some(
        (projectTech) => projectTech.name === activeTech
      )
    );
  };

  return (
    <Section id="projects">
      <div className="px-3 px-md-5">
        <div className="row row-cols-auto align-items-start justify-content-between justify-content-md-end gx-4 gy-3 gy-md-0 mb-5">
          <Filter state={[activeTechArray, setActiveTechArray]} />
          <Sort handleSort={setSort} />
        </div>
        <div className="row row-cols-auto gx-4 gx-md-5 gy-4 justify-content-center align-items-center">
          {[...data.allMdx.nodes]
            .sort(sortProjects)
            .filter(filterProjects)
            .map((project) => (
              <Card project={project} key={project.frontmatter.title} />
            ))}
        </div>
      </div>
    </Section>
  );
}

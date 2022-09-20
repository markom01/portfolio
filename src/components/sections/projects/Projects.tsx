import React, { useState, useEffect } from "react"; // , { useState, useContext }
// import { CarouselVisibilityContext } from "@myBlocks/carousel/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Section from "@sections/Section";
import Card from "./card/Card";

// import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
// import Carousel from "@myBlocks/carousel/Carousel";

export default function Skills() {
  const [activeTechArray, setActiveTechArray] = useState([]);
  const [ascendingSort, setAscendingSort] = useState(false);
  const data = useStaticQuery<Queries.TypegenPageQuery>(graphql`
    query TypegenPage {
      allMdx(filter: { frontmatter: { title: { regex: "" } } }) {
        nodes {
          frontmatter {
            startDate
            endDate
            link
            title
            description
            techStack {
              name
              img {
                childImageSharp {
                  gatsbyImageData(width: 24)
                }
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Section id="projects">
      <div className="px-3 px-md-5">
        <div className="row row-cols-auto align-items-start justify-content-between justify-content-md-end gx-4 mb-5">
          {/* <Filter state={[activeTechArray, setActiveTechArray]} /> */}
          <Sort state={[ascendingSort, setAscendingSort]} />
        </div>
        <div className="row row-cols-auto gx-4 gx-md-5 gy-5 justify-content-center align-items-center">
          {[...data.allMdx.nodes]
            .sort((a, b) =>
              ascendingSort
                ? Date.parse(a?.frontmatter?.startDate) -
                  Date.parse(b?.frontmatter?.startDate)
                : Date.parse(b?.frontmatter?.startDate) -
                  Date.parse(a?.frontmatter?.startDate)
            )
            .map((project, i) => (
              <Card project={project} key={project.frontmatter.title} />
            ))}
        </div>
      </div>
    </Section>
  );
}

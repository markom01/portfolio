import Icon from "@myBlocks/Icon";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../Section";
import * as styles from "./Experience.module.sass";

type ExperienceProps = Queries.ExperienceQuery["allMdx"]["nodes"][number];

export default function Experience() {
  const data = useStaticQuery<Queries.ExperienceQuery>(graphql`
    query Experience {
      allMdx(filter: { frontmatter: { role: { regex: "" } } }) {
        nodes {
          frontmatter {
            startDate
            endDate
            link
            role
            tasks
            skills {
              icon
              name
            }
            logo {
              childImageSharp {
                gatsbyImageData(width: 100)
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Section id="experience">
      <div className="pt-5 d-flex flex-column align-items-center">

      {data.allMdx.nodes.map((project) => (
        <ExperienceCard project={project} key={project.frontmatter.role} />
      ))}
      </div>
    </Section>
  );
}

function Connector() {
  return (
    <div className={`position-relative ${styles.connector} connector my-5`}>
      <div className={`mx-auto h-100 ${styles.connector_line}`} />
      {/* <div
        className={`position-absolute start-50 translate-middle rounded-circle mx-auto ${styles.connector_dot}`}
      /> */}
    </div>
  );
}

function ExperienceCard({ project }: { project: ExperienceProps }) {
  const startDate = new Date(project.frontmatter.startDate);
  const endDate = new Date(project.frontmatter.endDate);
  return (
    <>
      <div
        className={`d-flex flex-column jusfity-content-center ${styles.card}`}
      >
        <div className="d-flex align-items-center mb-5">
          <GatsbyImage
            image={getImage(project.frontmatter.logo)}
            alt={project.frontmatter.role}
            className="me-3"
          />
          <div className="d-flex flex-column text-start">
            <a
              target="_blank"
              className="text-white mb-2"
              href={project.frontmatter.link}
            >
              {project.frontmatter.role}
            </a>
            <h6>
              {`${startDate.getMonth() + 1}.${startDate.getFullYear()} - ${
                endDate.getMonth() + 1
              }.${endDate.getFullYear()}`}
            </h6>
          </div>
        </div>
        <div className="text-start mb-4">
          <h5 className="text-white mb-3">Responsibilities</h5>
          <ul>
            {project.frontmatter.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white mb-3 text-start">Skills</h5>
          <div className="d-flex flex-wrap justify-content-start">
            {project.frontmatter.skills.map((skill) => (
              <div
                className="d-flex align-items-center me-3 mb-3"
                key={skill.name}
              >
                <Icon name={skill.icon} className="me-2" />
                <h6>{skill.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Connector />
    </>
  );
}

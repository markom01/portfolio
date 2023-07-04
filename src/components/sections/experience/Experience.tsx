import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";

import Section from "../Section";
import * as styles from "./Experience.module";

type ExperienceProps = Queries.ExperienceQuery["allMdx"]["nodes"][number];

export default function Experience() {
  const data = useStaticQuery<Queries.ExperienceQuery>(graphql`
    query Experience {
      allMdx(
        filter: { frontmatter: { role: { regex: "" } } }
        sort: { fields: frontmatter___endDate, order: DESC }
      ) {
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
              publicURL
            }
          }
        }
      }
    }
  `);
  return (
    <Section className="mx-1 mx-md-3" id="experience">
      <div className={`wrapper-scroll pb-4 gap-5 ${styles.wrapper}`}>
        {data.allMdx.nodes.map((project, i) => (
          <ExperienceCard project={project} key={project.frontmatter.role} />
        ))}
      </div>
    </Section>
  );
}

function Connector() {
  return (
    <div className={`position-relative ${styles.connector} connector mx-5`}>
      <div className={`w-100 ${styles.connector_line}`} />
    </div>
  );
}

function ExperienceCard({ project }: { project: ExperienceProps }) {
  const startDate = new Date(project.frontmatter.startDate);
  const endDate = new Date(project.frontmatter.endDate);
  const [endDateFormatted, setEndDateFormatted] = useState(
    `${endDate.getMonth() + 1}.${endDate.getFullYear()}`
  );
  useEffect(() => {
    if (
      project.frontmatter.link === "https://www.hyperether.com/" ||
      project.frontmatter.role === "Freelance Frontend Developer"
    ) {
      setEndDateFormatted("Present");
    }
  }, []);

  const date = `${
    startDate.getMonth() + 1
  }.${startDate.getFullYear()} - ${endDateFormatted}`;
  return (
    <div className="d-flex align-items-center h-100">
      <article className={`d-flex flex-column h-100 ${styles.card}`}>
        <div className="d-flex align-items-center mb-5">
          <img
            src={project.frontmatter.logo.publicURL}
            alt={project.frontmatter.role}
            className="me-3"
            width={100}
          />
          <div className="d-flex flex-column text-start">
            <a
              target="_blank"
              className="text-white mb-2"
              href={project.frontmatter.link}
            >
              <h3>{project.frontmatter.role}</h3>
            </a>
            <h6>{date}</h6>
          </div>
        </div>
        <div className="text-start mb-4">
          <h5 className="text-white mb-3">Responsibilities</h5>
          <ul>
            {project.frontmatter.tasks.map(task => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white mb-3 text-start">Skills</h5>
          <div className="d-flex flex-wrap justify-content-start gap-2">
            {project.frontmatter.skills.map(skill => (
              <div className="d-flex align-items-center me-3" key={skill.name}>
                <span className="me-2">{skill.icon}</span>
                <h6>{skill.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </article>
      {project.frontmatter.role !== "Mobile Developer" && <Connector />}
    </div>
  );
}

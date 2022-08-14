import React from "react";
import Section from "@sections/Section";
import Card from "./card/Card";
import { IconContext } from "react-icons";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { RiGatsbyLine } from "react-icons/ri";
import { SiWebpack } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { SiPnpm } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const projects = [
  {
    title: "Mare Car Design",
    description:
      "Personal website made with HTML5 & CSS, where I showcased my automotive art. It's website built using Neumorphism style with IE12 support.",
    link: "https://marecardesign.netlify.app/",
    thumbnail: "./images/mcd/Glass-Morphism-Mockup.jpg"
  }
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="px-3 px-md-5">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <IconContext.Provider
            value={{
              color: "var(--icons-color)",
              size: "1.7rem"
            }}
          >
            {projects.map((project) => (
              <Card project={project} key={project.title} />
            ))}
          </IconContext.Provider>
        </div>
      </div>
    </Section>
  );
}

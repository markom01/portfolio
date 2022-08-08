import React from "react"
import Section from "@sections/Section"
import Card from "./card/Card"
import { IconContext } from "react-icons"
import { DiSass } from "react-icons/di"
import { DiReact } from "react-icons/di"
import { RiGatsbyLine } from "react-icons/ri"
import { SiWebpack } from "react-icons/si"
import { BsBootstrap } from "react-icons/bs"
import { SiPnpm } from "react-icons/si"
import { DiGit } from "react-icons/di"

const skills = [
  {
    name: "Gatsby",
    icon: <RiGatsbyLine />,
  },
  {
    name: "React & Friends",
    icon: <DiReact />,
  },
  { name: "Sass", icon: <DiSass /> },
  {
    name: "Bootstrap",
    icon: <BsBootstrap />,
  },
  {
    name: "Git",
    icon: <DiGit />,
  },
  {
    name: "Webpack",
    icon: <SiWebpack />,
  },
  {
    name: "PNPM",
    icon: <SiPnpm />,
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="mb-5">Skills</h2>
      <div className="px-3 px-md-5">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <IconContext.Provider
            value={{
              color: "var(--icons-color)",
              size: "2rem",
            }}
          >
            {skills.map((skill) => (
              <Card skill={skill} key={skill.name} />
            ))}
          </IconContext.Provider>
        </div>
      </div>
    </Section>
  )
}

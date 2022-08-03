import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { IconContext } from "react-icons"
import { ImStack } from "react-icons/im"
import { MdOutlineMonitor } from "react-icons/md"
import { TbBriefcase } from "react-icons/tb"
import { AiOutlineMessage } from "react-icons/ai"
// import styles from "./Navigation.module.sass"

const links = [
  {
    name: "skills",
    icon: <ImStack />,
  },
  {
    name: "projects",
    icon: <MdOutlineMonitor />,
  },
  {
    name: "experience",
    icon: <TbBriefcase />,
  },
  {
    name: "contact",
    icon: <AiOutlineMessage />,
  },
]

export default function Navigation() {
  return (
    <div className="fixed-top col-2 h-100 col-md-1 border-start-0 d-flex flex-column justify-content-evenly align-items-center px-3 rounded-end glass overflow-auto">
      <a href="#hero">
        <StaticImage
          src="../../../../images/favicon.svg"
          width={30}
          alt="logo"
        />
      </a>
      {links.map((link) => (
        <a className="d-flex flex-col" href={`#${link.name}`} key={link.name}>
          <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
            {link.icon}
          </IconContext.Provider>
          <small>{link.name.toUpperCase()}</small>
        </a>
      ))}
    </div>
  )
}

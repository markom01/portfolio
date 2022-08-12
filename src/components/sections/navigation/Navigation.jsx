import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { IconContext } from "react-icons"
import { ImStack } from "react-icons/im"
import { MdOutlineMonitor } from "react-icons/md"
import { TbBriefcase } from "react-icons/tb"
import { AiOutlineMessage } from "react-icons/ai"
import * as styles from "./Navigation.module.sass"

const links = [
  {
    name: "",
    icon: (
      <StaticImage
        src="../../../images/brand/Logo.svg"
        style={{ width: "2rem", marginBlockStart: "0.5rem" }}
        alt="logo"
        className={styles.logo}
      />
    ),
  },
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

export default function Navigation({ wide }) {
  return (
    <Fade left={wide} bottom={!wide}>
      <nav
        className={`d-flex justify-content-evenly align-items-center glass ${
          styles.nav
        }  
      ${
        wide
          ? `flex-column  border-start-0 px-2`
          : `border-bottom-0 px-3 py-2 mx-2`
      }`}
        id="nav"
      >
        <IconContext.Provider
          value={{
            size: "1.3em",
          }}
        >
          {links.map((link) => (
            <a
              className={`text-center text-decoration-none py-1 px-2 w-100 ${
                wide ? "" : `px-2`
              }`}
              href={`#${link.name}`}
              key={link.name}
            >
              <span
                className={`d-flex align-items-center justify-content-center ${
                  wide ? `p-3` : "p-2"
                }`}
                style={{ color: "var(--icons-color)" }}
              >
                {link.icon}
              </span>
              <small
                className="d-none d-sm-block my-2 icon-label"
                style={{ color: "var(--icons-color)" }}
              >
                {link.name.toUpperCase()}
              </small>
            </a>
          ))}
        </IconContext.Provider>
      </nav>
    </Fade>
  )
}

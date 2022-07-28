import React from "react"
// import styles from "./Navigation.module.sass"

const links = [
  {
    name: "Skills",
    icon: "gear",
  },
  {
    name: "Projects",
    icon: "display",
  },
  {
    name: "Experience",
    icon: "briefcase",
  },
  {
    name: "Contact",
    icon: "envelope",
  },
]

export default function Navigation() {
  return (
    <div className="fixed-top col-2 vh-100 col-md-1 border-start-0 d-flex flex-column justify-content-evenly align-items-center px-3 rounded-end glass">
      <a href="#hero">
        <img src="./favicon.svg" width={30} alt="logo" />
      </a>
      {links.map((link) => (
        <a
          href={`#${link.name.toLowerCase()}`}
          key={link.name}
          className="filter--white"
        >
          <img
            src={require(`bootstrap-icons/icons/${link.icon}.svg`)}
            width={20}
            alt={link.name}
          />
        </a>
      ))}
    </div>
  )
}

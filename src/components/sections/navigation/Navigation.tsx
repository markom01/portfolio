import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Navigation.module.sass";
import Icon from "../../blocks/myBlocks/icon/Icon";

const links = [
  {
    name: "projects",
    icon: "💻",
  },
  {
    name: "experience",
    icon: "💼",
  },
  {
    name: "contact",
    icon: "📨",
  },
  {
    name: "connect",
    icon: "🔗",
  },
];

export default function Navigation() {
  return (
    <nav
      className={`d-flex justify-content-evenly align-items-center glass ${styles.nav}  
      `}
      id="nav"
    >
      <a
        className={`text-center text-decoration-none py-1 px-2 w-100`}
        href={`#hero`}
      >
        <span
          className={`d-flex align-items-center justify-content-center`}
          style={{ color: "var(--icons-color)" }}
        >
          <img src="Logo.svg" alt="logo" width={40} className={styles.logo} />
        </span>
      </a>
      {links.map((link) => (
        <a
          className={`text-center text-decoration-none py-1 px-2 w-100`}
          href={`#${link.name}`}
          key={link.name}
        >
          <span
            className={`d-flex align-items-center justify-content-center icon--medium`}
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
    </nav>
  );
}

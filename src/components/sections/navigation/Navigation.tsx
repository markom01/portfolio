import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Navigation.module";
import NavLink from "./NavLink";

export type LinkType = {
  name: string;
  icon: string;
  toPage?: boolean;
};

const links: LinkType[] = [
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
  {
    name: "about",
    icon: "👋",
    toPage: true,
  },
];

export default function Navigation() {
  return (
    <header>
      <nav
        className={`d-flex justify-content-evenly align-items-center h-100 glass ${styles.nav}  
      `}
        id="nav"
      >
        <a
          className={`text-center text-decoration-none py-1 px-2 w-100`}
          href={`/#hero`}
        >
          <span
            className={`d-flex align-items-center justify-content-center`}
            style={{ color: "var(--icons-color)" }}
          >
            <img src="Logo.svg" alt="logo" width={40} className={styles.logo} />
          </span>
        </a>
        {links.map((link) => (
          <NavLink key={link.name} link={link}>
            <span
              className={`d-flex align-items-center justify-content-center icon--small`}
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
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

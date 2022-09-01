import React from "react";
import * as styles from "./Button.module.sass";

export default function Button({
  id = "",
  secondary = false,
  onClick,
  className = "",
  children,
}) {
  return id === "" ? (
    <button
      onClick={onClick}
      className={
        `button position-relative d-inline-block px-3 py-2 text-decoration-none text-uppercase ${
          secondary ? styles.secondary : styles.primary
        }` + `${className}`
      }
    >
      {children}
    </button>
  ) : (
    <a
      className={`button position-relative d-inline-block px-3 py-2 text-decoration-none text-uppercase 
         ${secondary ? styles.secondary : styles.primary}`}
      href={`#${id}`}
      // {...onClick}
      {...className}
    >
      {id}
    </a>
  );
}

import React, { MouseEventHandler } from "react";
import * as styles from "./Button.module.sass";

interface Button {
  id?: string;
  secondary?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: JSX.Element | string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  id = "",
  secondary = false,
  onClick,
  className = "",
  children,
  type = "button",
}: Button) {
  return id === "" ? (
    <button
      onClick={onClick}
      className={
        `button position-relative d-inline-block px-3 py-2 text-decoration-none text-uppercase ${
          secondary ? styles.secondary : styles.primary
        }` + ` ${className}`
      }
      type={type}
    >
      {children}
    </button>
  ) : (
    <a
      className={`button position-relative d-inline-block px-3 py-2 text-decoration-none text-uppercase ${className}
         ${secondary ? styles.secondary : styles.primary} ${className}`}
      href={`#${id}`}
      type={type}
      // {...onClick}
    >
      {id}
    </a>
  );
}

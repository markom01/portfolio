import React from "react"
import * as styles from "./Button.module.sass"

export default function Button({ id, variant }) {
  return (
    <a
      className={`button position-relative d-inline-block px-3 py-2 text-decoration-none text-uppercase ${styles[variant]}`}
      href={`#${id}`}
    >
      {id}
    </a>
  )
}

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Loader.module.sass"

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <StaticImage
        src="../../../../images/Logo.svg"
        alt="Loader"
        className={styles.loading}
      />
    </div>
  )
}

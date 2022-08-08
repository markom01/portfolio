import React from "react"
import * as styles from "./Card.module.sass"
import Fade from "react-reveal/Fade"

export default function Card({ skill }) {
  //! todo
  return (
    <div
      className={`${styles.glassCard} p-3 m-2 m-md-3 m-lg-4 p-md-4 rounded d-flex flex-column justify-content-center align-items-center`}
    >
      <div className="mb-3">{skill.icon}</div>
      <Fade left cascade>
        <small>{skill.name}</small>
      </Fade>
    </div>
  )
}

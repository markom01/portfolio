import React from "react";
import * as styles from "./Icon.module.sass";

export default function Icon({
  src = "",
  alt = "No alt text",
  className = "",
  size = "medium",
}) {
  return (
    <img src={src} className={`${styles.icon} ${className} ${styles[size]}`} />
  );
}

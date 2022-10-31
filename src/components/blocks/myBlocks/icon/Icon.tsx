import React from "react";

import * as styles from "./Icon.module";

export default function Icon({
  src = "",
  alt = "No alt text",
  className = "",
  size = "medium",
}) {
  return (
    <img
      alt={alt}
      src={src}
      className={`${styles.icon} ${className} ${styles[size]}`}
    />
  );
}

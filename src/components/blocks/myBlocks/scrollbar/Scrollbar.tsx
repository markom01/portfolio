import React from "react";
import * as styles from "./Scrollbar.module.sass";

export default function Scrollbar({ progress }: { progress: number }) {
  return (
    <progress
      className={`${styles.scrollbar} position-absolute top-0 left-0 vw-100 bg-transparent border-0`}
      value={progress}
    />
  );
}

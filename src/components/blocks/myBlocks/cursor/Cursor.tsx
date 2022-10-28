import React, { useState } from "react";
import * as styles from "./Cursor.module";

export default function Cursor({
  coords,
}: {
  coords: { x: number; y: number };
}) {
  return (
    <div
      style={{
        transform: `translate3d(${coords.x - 15}px, ${coords.y - 15}px,0)`,
      }}
      className={`position-absolute ${styles.cursor} glass--border p-2`}
    >
      <div className={`${styles.cursor_inner} w-100 h-100`}></div>
    </div>
  );
}

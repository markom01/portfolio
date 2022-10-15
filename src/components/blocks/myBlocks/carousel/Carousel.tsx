import Icon from "@myBlocks/icon/Icon";
import React, { createContext, useContext, useState } from "react"; // , { createContext, useContext }
import * as styles from "./Carousel.module.sass";

export default function Carousel() {
  return (
    <div
      className={`position-absolute left-0 top-0 h-100 w-100 bg-dark p-3 ${styles.background}  `}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <button className="position-absolute top-0 end-0">x</button>
    </div>
  );
}

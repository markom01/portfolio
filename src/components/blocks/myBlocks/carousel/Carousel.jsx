import React from // , { createContext, useContext }
"react";
import * as styles from "./Carousel.module.sass";
import { FaTimes } from "react-icons/fa";

// export const CarouselVisibilityContext = createContext(false);

export default function Carousel() {
  // const isCarouselVisible = useContext(CarouselVisibilityContext);
  return (
    // <CarouselVisibilityContext.Provider value={isCarouselVisible}>
    <div
      className={`vw-100 vh-100 bg-dark p-3 fixed-top ${styles.background} `}
      // ${
      //   isCarouselVisible ?
      // "bg-opacity-75"
      //   : styles.opacity_0
      // }
    >
      <button className="position-absolute top-0 end-0">
        <FaTimes />
      </button>
    </div>
    // </CarouselVisibilityContext.Provider>
  );
}

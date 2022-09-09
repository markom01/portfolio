import React from "react"; // , { createContext, useContext }
import * as styles from "./Carousel.module.sass";

// export const CarouselVisibilityContext = createContext(false);

export default function Carousel() {
  // const isCarouselVisible = useContext(CarouselVisibilityContext);
  return (
    // <CarouselVisibilityContext.Provider value={isCarouselVisible}>
    <div
      className={`vw-100 vh-100 bg-dark p-3 fixed-top ${styles.background} `}
      style={{ width: window.innerWidth, height: window.innerHeight }}
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

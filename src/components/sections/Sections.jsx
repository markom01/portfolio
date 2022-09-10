import React, {
  useState,
  // Suspense,
  // , useEffect
} from "react";
// import Fade from "react-reveal/Fade";
import Scrollbar from "@myBlocks/scrollbar/Scrollbar";
import Navigation from "@sections/navigation/Navigation";
import Hero from "@sections/hero/Hero";
// import * as styles from "./Sections.module.sass";
import BelowTheFold from "./BelowTheFold";
// const BelowTheFold = React.lazy(() => import("./BelowTheFold"));
// import Carousel from "@myBlocks/carousel/Carousel";

export default function Sections() {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = (e) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const targetHeight = target.scrollHeight - target.clientHeight;
    const scroll = `${(scrollTop / targetHeight) * 100}%`;
    setScrolled(scroll);
  };

  return (
    <>
      <Scrollbar state={scrolled} />
      <div className={`vw-100 vh-100 pt-3 d-flex`} id="main">
        <Navigation />
        <div
          className="glass mx-2  px-3  h-100 text-center"
          id="content"
          onScroll={handleScroll}
        >
          <Hero />
          {/* <Suspense> */}
          <BelowTheFold />
          {/* </Suspense> */}
        </div>
        {/* <Carousel /> */}
      </div>
    </>
  );
}

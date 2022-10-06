import React, { useRef, useState } from "react";
// import {Fade} from "react-reveal";
import Scrollbar from "@myBlocks/scrollbar/Scrollbar";
import Navigation from "@sections/navigation/Navigation";
import Hero from "@sections/hero/Hero";
// import * as styles from "./Sections.module.sass";
import BelowTheFold from "./BelowTheFold";
// const BelowTheFold = React.lazy(() => import("./BelowTheFold"));
// import Carousel from "@myBlocks/carousel/Carousel";

export default function Sections() {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const targetHeight = target.scrollHeight - target.clientHeight;
    setScrolled(scrollTop / targetHeight);
  };
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className="video position-absolute vw-100 vh-100">
        <video
          src="bg-triangles-small.mp4"
          className="w-100 h-100"
          autoPlay
          muted
          loop
          ref={videoRef}
          style={{ objectFit: "cover" }}
          onPlay={() => (videoRef.current!.playbackRate = 0.5)}
        />
      </div>
      <Scrollbar progress={scrolled} />
      <div className={`vw-100 pt-3 d-flex`} id="main">
        <Navigation />
        <div
          className="glass mx-2  px-3  h-100 text-center"
          id="content"
          onScroll={handleScroll}
        >
          <Hero />
          <BelowTheFold />
        </div>
      </div>
    </>
  );
}

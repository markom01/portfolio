import React, { useRef } from "react";
import type { HeadProps } from "gatsby";
import "@sass/App.sass";
import { StaticImage } from "gatsby-plugin-image";
// import Loader from "@myBlocks/loader/Loader";
import Sections from "@sections/Sections";

export function Head(props: HeadProps) {
  return (
    <>
      <title>Marko M | Portfolio</title>
      <meta name="description" content="Front-End Web Development" />
    </>
  );
}

export default function App() {
  const videoRef = useRef<HTMLVideoElement>();

  return (
    <>
      <video
        src="bg-triangles-small.mp4"
        className="position-absolute top-50 start-50 translate-middle vw-100 vh-100"
        autoPlay
        loop
        ref={videoRef}
        style={{ objectFit: "cover" }}
        onPlay={() => (videoRef.current.playbackRate = 0.5)}
      />
      {/* <Suspense fallback={<Loader />}> */}
      <Sections />
      {/* </Suspense> */}
    </>
  );
}

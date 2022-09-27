import React, { useRef, useState } from "react";
import type { HeadProps } from "gatsby";
import "@sass/App.sass";
import { StaticImage } from "gatsby-plugin-image";
import Loader from "@myBlocks/loader/Loader";
import Sections from "@sections/Sections";
import Cursor from "@myBlocks/cursor/Cursor";

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
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div onPointerMove={(e) => setCoords({ x: e.clientX, y: e.clientY })}>
      {/* <Cursor coords={coords} /> */}
      <div className="video position-absolute top-50 start-50 translate-middle vw-100 vh-100">
        <video
          src="bg-triangles-small.mp4"
          className="w-100 h-100"
          autoPlay
          muted
          loop
          ref={videoRef}
          style={{ objectFit: "cover" }}
          onPlay={() => (videoRef.current.playbackRate = 0.5)}
        />
      </div>
      {/* <Suspense fallback={<Loader />}> */}
      <Sections />
      {/* </Suspense> */}
    </div>
  );
}

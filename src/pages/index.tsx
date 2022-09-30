import React, { useRef, useState, Suspense } from "react";
import type { HeadProps } from "gatsby";
import "@sass/App.sass";
import { StaticImage } from "gatsby-plugin-image";
import Loader from "@myBlocks/loader/Loader";
// import Sections from "@sections/Sections";
const Sections = React.lazy(() => import("@sections/Sections"));
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
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div onPointerMove={(e) => setCoords({ x: e.clientX, y: e.clientY })}>
      {/* <Cursor coords={coords} /> */}
      <Suspense fallback={<Loader />}>
        <Sections />
      </Suspense>
    </div>
  );
}

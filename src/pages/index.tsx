import React from "react";
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
  return (
    <>
      <StaticImage
        src="../images/alex-perez-ioJBsYQ-pPM-unsplash.jpg"
        alt="Background Image"
        className="position-absolute top-50 start-50 translate-middle vw-100 vh-100"
      />
      {/* <Suspense fallback={<Loader />}> */}
      <Sections />
      {/* </Suspense> */}
    </>
  );
}

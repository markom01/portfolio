import React from "react";

import Footer from "@sections/footer/Footer";

import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

export default function BelowTheFold() {
  return (
    <>
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

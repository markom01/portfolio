import React from "react";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Footer from "@sections/footer/Footer";
import Experience from "./experience/Experience";

export default function BelowTheFold() {
  return (
    <>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

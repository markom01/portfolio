import React from "react";
import Contact from "./contact/Contact";
import Footer from "@sections/footer/Footer";
import Projects from "./projects/Projects";
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

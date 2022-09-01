import React, { useState, useEffect } from "react"; // , { useState, useContext }
// import { CarouselVisibilityContext } from "@myBlocks/carousel/Carousel";
import Section from "@sections/Section";
import Card from "./card/Card";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { DiSass } from "react-icons/di";
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";
// import Carousel from "@myBlocks/carousel/Carousel";

export const techStack = [
  {
    icon: AiOutlineHtml5,
    name: "HTML",
  },

  {
    icon: DiCss3Full,
    name: "CSS",
  },
  {
    icon: DiSass,
    name: "Sass",
  },
];

const projects = [
  {
    title: "Old Portfolio",
    techStack: [techStack[0], techStack[2]],
    description:
      "Personal portfolio website where I showcased my tech skills and other projects. It's accessible, cross-browser compatilble website built using CSS Grid for layout.",
    link: "https://marko-meseldzija.netlify.app/",
    date: [new Date(2021, 6) /*start*/, new Date(2021, 10) /*end*/],
  },
  {
    title: "Mare Car Design",
    techStack: [techStack[0], techStack[1]],
    description:
      "Personal website where I showcased my automotive art, built using Neumorphism style",
    link: "https://marecardesign.netlify.app/",
    date: [new Date(2021, 10), new Date(2021, 11)],
  },
];
export default function Skills() {
  const [activeTechArray, setActiveTechArray] = useState([]);
  // const map = [];
  // useEffect(() => {
  //   projects.forEach((project, i) => {
  //     if (project.techStack.includes(activeTechArray[i])) {
  //       map.push(activeTechArray[i]);
  //       console.log(map);
  //     }
  //   });
  // }, [map]);

  return (
    <Section id="projects">
      <div className="px-3 px-md-5">
        <div className="row row-cols-auto align-items-start justify-content-end gx-5 mb-5">
          <Filter state={[activeTechArray, setActiveTechArray]} />
          <Sort />
        </div>
        <div className="row row-cols-auto gx-4 gx-md-5 gy-5 justify-content-center align-items-center">
          {
            projects.map((project, i) => (
              <Card project={project} i={i} key={`scene-${project.title}`} />
            ))
            // .filter(

            // project.techStack.forEach((projectTech) =>
            //   console.log([...projectTech.name])
            // )
            // project.techStack.forEach(
            //   (projectTech) =>
            //     activeTechArray.every(
            //       (filterTech) => projectTech.name === filterTech
            //     )
            // console.log(projectTech)
            // )
            // )
          }
        </div>
      </div>
    </Section>
  );
}

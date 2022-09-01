import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import * as styles from "./Filter.module.sass";
import { techStack } from "../Projects";

export default function Filter({ state }) {
  return (
    <div className="col d-flex flex-column justify-content-center">
      <small className="ms-auto mb-1">Filter by tech used</small>
      <div className="row row-cols-auto gx-1 my-1">
        <IconContext.Provider
          value={{ size: "1.5rem", color: `var(--bs-secondary)` }}
        >
          {techStack.map((tech) => (
            <TechIcon tech={tech} state={state} key={tech.name} />
          ))}
        </IconContext.Provider>
      </div>
    </div>
  );
}

function TechIcon(props) {
  const [activeTech, setActiveTech] = useState(false);

  const Icon = props.tech.icon;

  return (
    <button
      onClick={() => {
        activeTech
          ? props.state[1](
              props.state[0].filter((name) => name !== props.tech.name)
            )
          : props.state[1]([...props.state[0], props.tech.name]);
        setActiveTech(!activeTech);
      }}
      className="col"
    >
      <div
        className={`p-2 ${activeTech ? styles.bg_active : ""}`}
        data-tooltip={props.tech.name}
      >
        <Icon />
      </div>
    </button>
  );
}

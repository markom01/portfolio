import Icon from "@myBlocks/Icon";
import React from "react";
import * as styles from "./Radio.module.sass";

export default function Radio({
  label,
  icon,
  className,
}: {
  label: string;
  icon: string;
  className?: string;
}) {
  return (
    <>
      <input
        id={label}
        type="radio"
        value={label}
        name="radios"
        style={{ display: "none" }}
        className={styles.radio}
      />
      <label htmlFor={label} className={`py-1 px-2 ${className}`}>
        <Icon name={icon} />
      </label>
    </>
  );
}

{
  /*   
          <div
            className={`w-100 h-100  ${state[0] === label ? "bg-primary" : ""}`}
          ></div> */
}

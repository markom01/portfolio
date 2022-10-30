import React from "react";

import Icon from "@myBlocks/icon/Icon";

import * as styles from "./Radio.module";

export default function Radio({
  label,
  down,
  className = "",
  handleSort,
}: {
  label: string;
  down?: boolean;
  className?: string;
  handleSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <input
        type="radio"
        id={label}
        value={label}
        name="sort-radios"
        className={`${styles.radio}`}
        onChange={e => handleSort(e.target.value)}
      />
      <label htmlFor={label} className={`w-50 py-1 px-2 ${className}`}>
        <ChevronSVG down={down} style={{ width: "15px" }} />
      </label>
    </>
  );
}

export function ChevronSVG({
  down = false,
  style,
  className = "",
}: {
  down?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 407.437 407.437"
      width={20}
      className={`${className} ${down ? styles.flip : ""}`}
      style={style}
      fill="var(--glass-border)"
    >
      <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
    </svg>
  );
}

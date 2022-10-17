import Icon from "@myBlocks/icon/Icon";
import React from "react";
import * as styles from "./Radio.module.sass";

export default function Radio({
  label,
  icon,
  className = "",
  handleSort,
}: {
  label: string;
  icon: string;
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
        className={`${styles.radio} ${styles.hide}`}
        onChange={(e) => handleSort(e.target.value)}
      />
      <label htmlFor={label} className={`py-1 px-2 ${className}`}>
        {icon}
      </label>
    </>
  );
}

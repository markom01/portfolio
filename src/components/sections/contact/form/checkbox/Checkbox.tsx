import React, { useState } from "react";
import Icon from "@myBlocks/Icon";
import * as styles from "./Checkbox.module.sass";

export default function Checkbox({ checked = false }: { checked: boolean }) {
  const [isChecked, setisChecked] = useState(checked);
  return (
    <button
      type="button"
      className={`d-flex justify-content-center align-items-center rounded-circle p-0 ${
        styles.checkbox
      } ${isChecked ? "border border-primary" : "glass--border"}`}
      onClick={() => setisChecked(!isChecked)}
    >
      <Icon
        size="14px"
        color={isChecked ? "var(--bs-primary)" : ""}
        name={isChecked ? "check" : "x"}
      />
    </button>
  );
}

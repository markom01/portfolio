import React, { useState } from "react";
import Icon from "@myBlocks/icon/Icon";
import * as styles from "./Checkbox.module";

export default function Checkbox() {
  return <input type="checkbox" className={`py-1 px-2 ${styles.checkbox}`} />;
}

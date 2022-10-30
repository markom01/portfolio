import React, { useState } from "react";

import Radio from "@sections/contact/form/radio/Radio";

import Icon from "../../../blocks/myBlocks/icon/Icon";
import * as styles from "./Sort.module";

export default function Sort({
  handleSort,
}: {
  handleSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="col ">
      <div className="d-flex flex-column justify-content-center">
        <small className="mb-2">Sort by Date</small>
        <div
          className="p-1 "
          style={{ border: "1px solid var(--glass-border)" }}
        >
          <Radio label="desc" handleSort={handleSort} className="" />
          <Radio label="asc" handleSort={handleSort} down className="" />
        </div>
      </div>
    </div>
  );
}

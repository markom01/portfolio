import Radio from "@sections/contact/form/radio/Radio";
import React, { useState } from "react";
import Icon from "../../../blocks/myBlocks/icon/Icon";
import * as styles from "./Sort.module.sass";

export default function Sort({
  handleSort,
}: {
  handleSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="col d-flex flex-column justify-content-center">
      <small className="mb-2">Sort by Date</small>
      <div className="d-flex align-items-center">
        <div
          className="p-1"
          style={{ border: "1px solid var(--glass-border)" }}
        >
          <Radio
            label="desc"
            handleSort={handleSort}
            icon="˄"
            className="me-1"
          />
          <Radio label="asc" handleSort={handleSort} icon="˅" />
        </div>
      </div>
    </div>
  );
}

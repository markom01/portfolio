import React, { useState } from "react";
import Icon from "../../../blocks/myBlocks/Icon";
import * as styles from "./Sort.module.sass";
export default function Sort({ state }) {
  return (
    <div className="col d-flex flex-column justify-content-center">
      <small className="mb-1">Sort by Date</small>
      <div className="d-flex align-items-center">
        <div
          className="p-1"
          style={{ border: "1px solid var(--glass-border)" }}
        >
          <button onClick={() => state[1](false)}>
            <div className={`py-1 px-2 ${!state[0] ? styles.active : ""}`}>
              <Icon name="chevron-down" />
            </div>
          </button>
          <button onClick={() => state[1](true)}>
            <div className={`py-1 px-2 ${state[0] ? styles.active : ""}`}>
              <Icon name="chevron-up" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

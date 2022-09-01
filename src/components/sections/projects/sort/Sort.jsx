import React, { useState } from "react";
import * as styles from "./Sort.module.sass";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function Sort() {
  const [ascending, setAscending] = useState(false);
  return (
    <div className="col d-flex flex-column justify-content-center">
      <small className="mb-1">Sort by Date</small>
      <div className="d-flex align-items-center">
        <div
          className="p-1"
          style={{ border: "1px solid var(--glass-border)" }}
        >
          <button onClick={() => setAscending(false)}>
            <div className={`py-1 px-2 ${!ascending ? styles.active : ""}`}>
              <AiOutlineArrowDown />
            </div>
          </button>
          <button onClick={() => setAscending(true)}>
            <div className={`py-1 px-2 ${ascending ? styles.active : ""}`}>
              <AiOutlineArrowUp />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Fade from "react-reveal/Fade";
import Icon from "../Icon";
import * as styles from "./Alert.module.sass";

export default function Alert({ text, visible, handleClick }) {
  const success = text === "Sent! Expect answers soon.";
  return (
    visible && (
      <Fade top>
        <div
          className={`glass p-2 col ${
            success ? styles.success_bg : styles.error_bg
          }`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h6 className={`${success ? styles.success : styles.error}`}>
              {text}
            </h6>
            <button onClick={() => handleClick(!visible)}>
              <Icon name="x" />
            </button>
          </div>
        </div>
      </Fade>
    )
  );
}

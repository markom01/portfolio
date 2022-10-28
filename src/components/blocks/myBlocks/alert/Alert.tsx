import React from "react";
import { Fade } from "react-reveal";
import Icon from "../icon/Icon";
import * as styles from "./Alert.module";

interface AlertProps {
  text: string;
  visible: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Alert({ text, visible, handleClick }: AlertProps) {
  const success = text === "Sent! Expect answers soon.";
  return (
    <Fade top>
      <div
        className={`${visible ? "" : "d-none"} glass p-2 col ${
          success ? styles.success_bg : styles.error_bg
        }`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h6 className={`${success ? styles.success : styles.error}`}>
            {text}
          </h6>
          <button onClick={() => handleClick(!visible)}>x</button>
        </div>
      </div>
    </Fade>
  );
}

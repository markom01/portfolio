import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as styles from "./Form.module.sass";
import Button from "@myBlocks/button/Button";
import Alert from "../../../blocks/myBlocks/alert/Alert";
import Select from "./select/Select";
import Checkbox from "./checkbox/Checkbox";
import Radio from "./radio/Radio";

export default function Form() {
  const [responseInfo, setResponseInfo] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResponseInfo("Sent! Expect answers soon.");
    console.log(responses);
    // emailjs
    //   .send(
    //     "service_uu3ohhx",
    //     "template_tcns97j",
    //     responses,
    //     "CAC6I6BDizh-EyeW6"
    //   )
    //   .then(
    //     (response) => {
    //       setResponseInfo("Sent! Expect answers soon.");
    //       setAlertVisible(true);
    //       process.env.NODE_ENV === "development" && console.log(response.text);
    //     },
    //     (err) => {
    //       setResponseInfo(err);
    //       setAlertVisible(true);
    //       process.env.NODE_ENV === "development" && console.log(err);
    //     }
    //   );
    // setAlertVisible(true);
  };

  const textInputs = [
    {
      type: "text",
      name: "Name",
    },
    {
      type: "email",
      name: "Email",
    },
  ];

  const [responses, setResponses] = useState({});

  const radioLabels = ["Radio 1", "Radio 2", "Radio 3"];
  const [activeRadio, setActiveRadio] = useState(null);

  return (
    <form
      id="contact"
      className={`mx-auto px-3 px-md-4 py-5  ${styles.form}`}
      onSubmit={handleSubmit}
      autoComplete="off"
      spellCheck="false"
    >
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {textInputs.map((data) => (
          <TextInput
            data={data}
            responses={responses}
            handleChange={setResponses}
            key={data.name}
          />
        ))}
        <Select responses={responses} handleChange={setResponses} />
      </div>
      <div className="row row-cols-1">
        <TextArea
          responses={responses}
          handleChange={setResponses}
          className="mb-5"
        />
        <div className="col">
          <Button
            secondary
            type="submit"
            className={`mx-auto ${alertVisible ? "mb-4" : ""}`}
          >
            Submit
          </Button>
        </div>
      </div>
      <Alert
        text={responseInfo}
        visible={alertVisible}
        handleClick={setAlertVisible}
      />
      {/* {radioLabels.map((label) => (
        <Radio label={label} key={label} />
      ))} */}
    </form>
  );
}

interface textInput {
  type: string;
  name: string;
}

export interface TextInputProps {
  data: textInput;
  responses: {
    [key: string]: string;
  };
  handleChange: React.Dispatch<React.SetStateAction<{}>>;
  className?: string;
}

function TextInput({
  data,
  responses,
  handleChange,
  className,
}: TextInputProps) {
  const [clicked, setClicked] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const handleInteraction = () => {
    setClicked(true);
    setBgActive(true);
  };

  return (
    <div className="col" style={{ minInlineSize: "200px" }}>
      <div
        className={`position-relative 
        ${clicked ? styles.input_clicked : ""}
        ${bgActive ? styles.input_clicked_bg : ""}
        `}
      >
        <>
          <label
            htmlFor={data.name}
            className={`position-absolute ${styles.label}`}
          >
            {data.name}
          </label>
          <input
            type={data.type}
            id={data.name}
            name={data.name}
            className={` pb-1 w-100 pt-4 ${styles.input} `}
            onClick={handleInteraction}
            onFocus={handleInteraction}
            onChange={(e) => {
              handleChange({ ...responses, [data.name]: e.target.value });
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                setClicked(false);
              }
              setBgActive(false);
            }}
          />
        </>
      </div>
    </div>
  );
}

interface TextAreaProps {
  className?: string;
  responses: TextInputProps["responses"];
  handleChange: React.Dispatch<React.SetStateAction<{}>>;
}

function TextArea({ className, responses, handleChange }: TextAreaProps) {
  const [clicked, setClicked] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const handleInteraction = () => {
    setClicked(true);
    setBgActive(true);
  };
  return (
    <div className={`col ${className}`} style={{ minInlineSize: "200px" }}>
      <div
        className={`position-relative ${clicked ? styles.input_clicked : ""}
        ${bgActive ? styles.input_clicked_bg : ""}`}
      >
        <label
          htmlFor="message"
          className={`position-absolute ${styles.label}`}
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className={`pb-1 w-100 pt-4 ${styles.input} `}
          onClick={handleInteraction}
          onFocus={handleInteraction}
          onBlur={(e) => {
            if (!e.target.value) {
              setClicked(false);
            }
            setBgActive(false);
          }}
          onChange={(e) => {
            handleChange({ ...responses, message: e.target.value });
          }}
          rows={5}
        ></textarea>
      </div>
    </div>
  );
}

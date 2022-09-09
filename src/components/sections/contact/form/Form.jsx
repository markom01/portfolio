import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as styles from "./Form.module.sass";
import Button from "@myBlocks/button/Button";

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(responses);
    emailjs
      .send(
        "service_uu3ohhx",
        "template_tcns97j",
        responses,
        "CAC6I6BDizh-EyeW6"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
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

  const selectInputs = [
    { name: "Redesign" },
    { name: "Design" },
    { name: "Development" },
  ];

  const [responses, setResponses] = useState({});

  return (
    <form
      id="contact"
      className={`mx-auto p-3 p-md-4  ${styles.form}`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-3">
        {textInputs.map((data) => (
          <Input
            text
            data={data}
            responses={responses}
            handleChange={setResponses}
            key={data.name}
          />
        ))}
      </div>
      <div className="row row-cols-1">
        <Input
          select
          responses={responses}
          handleChange={setResponses}
          data={selectInputs}
          className="mb-3"
        />
        <TextArea
          responses={responses}
          handleChange={setResponses}
          className="mb-5"
        />
        <div className="col">
          <Button secondary type="submit" className="mx-auto">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

function Input({
  data,
  responses,
  handleChange,
  text = false,
  select = false,
  className,
}) {
  const [clicked, setClicked] = useState(false);
  const [optionsViewable, setOptionsViewable] = useState(false);

  return (
    <div className="col" style={{ minInlineSize: "200px" }}>
      <div
        className={`position-relative ${clicked ? styles.input_clicked : ""}`}
      >
        {text ? (
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
              onClick={() => setClicked(true)}
              onChange={(e) => {
                handleChange({ ...responses, [data.name]: e.target.value });
              }}
              onBlur={(e) => !e.target.value && setClicked(false)}
            />
          </>
        ) : (
          <>
            <label
              htmlFor="projects"
              className={`position-absolute ${styles.label}`}
            >
              Select Project Type:
            </label>
            <select
              id="projects"
              name="projects"
              style={optionsViewable ? { color: "var(--bs-secondary)" } : {}}
              className={` pb-1 w-100 pt-4 ${styles.input} ${className} `}
            >
              {data.map((data) => (
                <option
                  key={data.name}
                  value={data.name}
                  onClick={(e) => {
                    setClicked(true);

                    handleChange({
                      ...responses,
                      project: `Website ${e.target.value}`,
                    });
                    setOptionsViewable(true);
                  }}
                  onBlur={(e) => !e.target.value && setClicked(false)}
                >
                  {`Website ${data.name}`}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </div>
  );
}

function TextArea({ className, responses, handleChange }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="col" style={{ minInlineSize: "200px" }}>
      <div
        className={`position-relative ${clicked ? styles.input_clicked : ""}`}
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
          className={`pb-1 w-100 pt-4 ${styles.input} ${className}`}
          onClick={() => setClicked(true)}
          onBlur={(e) => !e.target.value && setClicked(false)}
          onChange={(e) => {
            handleChange({ ...responses, message: e.target.value });
          }}
          rows={5}
        ></textarea>
      </div>
    </div>
  );
}

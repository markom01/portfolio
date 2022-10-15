import React, { useState } from "react";
import { Slide, Fade } from "react-reveal";
import Icon from "../../../../blocks/myBlocks/icon/Icon";
import * as selectStyles from "./Select.module.sass";
import { TextInputProps } from "../Form";
import * as radioStyles from "../radio/Radio.module.sass";
// import * as formStyles from "../Form.module.sass";

interface SelectProps {
  responses: TextInputProps["responses"];
  handleChange: TextInputProps["handleChange"];
}
export default function Select({ responses, handleChange }: SelectProps) {
  const selectInputs = [
    { name: "Redesign" },
    { name: "Design" },
    { name: "Development" },
  ];
  const [optionsViewable, setOptionsViewable] = useState(false);
  const [selected, setSelected] = useState("Select Project Type");
  const initial = selected === "Select Project Type";

  return (
    <div className={`col ${""}`}>
      <div className="position-relative">
        <button
          className={`d-flex glass--border px-2 ${
            initial ? "py-3" : "pt-1 pb-2"
          }  justify-content-between align-items-center w-100`}
          type="button"
          onClick={() => setOptionsViewable(!optionsViewable)}
          onBlur={() =>
            setTimeout(() => {
              setOptionsViewable(false);
            }, 200)
          }
        >
          <div className="d-flex flex-column align-items-start">
            <p
              className={`mb-0 ${initial ? "" : selectStyles.select_label_up}`}
            >
              Select Project Type
            </p>
            {!initial && <p className="py-1 text-start">{selected}</p>}
          </div>
          ⌄
        </button>
        {optionsViewable && (
          <Slide top>
            <div
              className={`position-absolute start-50 translate-middle-x glass d-flex flex-column w-100 ${selectStyles.select}`}
            >
              {selectInputs.map((data) => (
                <div key={data.name}>
                  <Fade cascade>
                    <input
                      type="radio"
                      id={data.name}
                      value={data.name}
                      name="project-types-radios"
                      className={radioStyles.hide}
                      onChange={(e) => {
                        setSelected(`Website ${e.target.value}`);

                        handleChange({
                          ...responses,
                          project: `Website ${data.name}`,
                        });
                      }}
                    />
                    <label
                      htmlFor={data.name}
                      className={`py-2 w-100 ${selectStyles.select_item}`}
                    >{`Website ${data.name}`}</label>
                  </Fade>
                </div>
              ))}
            </div>
          </Slide>
        )}
      </div>
    </div>
  );
}

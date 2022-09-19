import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Icon from "../../../../blocks/myBlocks/Icon";
import * as selectStyles from "./Select.module.sass";
// import * as formStyles from "../Form.module.sass";

export default function Select({ responses, handleChange }) {
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
            {!initial && <p className="py-1">{selected}</p>}
          </div>
          <Icon name="chevron-down" />
        </button>
        {optionsViewable && (
          <Fade top>
            <div
              className={`position-absolute start-50 translate-middle-x glass d-flex flex-column w-100 ${selectStyles.select}`}
            >
              {selectInputs.map((data) => (
                <button
                  key={data.name}
                  type="button"
                  className={`py-2 ${selectStyles.select_item}`}
                  onClick={(e) => {
                    setSelected(`Website ${data.name}`);

                    handleChange({
                      ...responses,
                      project: `Website ${data.name}`,
                    });
                  }}
                >
                  {`Website ${data.name}`}
                </button>
              ))}
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}

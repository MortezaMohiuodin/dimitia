import { useState } from "react";
import Select from "react-select";

import s from "./DropDown.module.css";

function DropDown({ option }) {
  const [SelectedOption, setSelectedOption] = useState(1);
  const handleChange = (e) => {
    setSelectedOption({ selectedOption }, () =>
      console.log(`Option selected:`, SelectedOption)
    );
  };
  const { selectedOption } = SelectedOption;

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "#fff",
        color: "#7a7a7a",
        cursor: "pointer",
        outline: "none",
        border: "none",

        ":hover": {
          ...styles,
          backgroundColor: "#fff",
          color: "var(--color-secondary)",
        },
      };
    },
    placeholder: (styles) => ({ ...styles, color: "#7a7a7a" }),
    control: (styles) => ({
      ...styles,
      position: "relative",
      top: "3px",
      bottom: 0,
      border: "none",
      outline: "none",
      backgroundColor: "none",
      width: "10em",
      lineHeight: "25px",

      ":hover": {
        borderColor: "#fff",
        boxShadow: "none",
        border: "none",
        outline: "none",
      },
      ":active": {
        border: "none",
        outline: "none",
      },
    }),
  };

  return (
    <div>
      <Select
        className={s.select}
        placeholder="دسته بندی"
        value={selectedOption}
        onChange={handleChange}
        options={option}
        styles={colourStyles}
      />
    </div>
  );
}

export { DropDown };

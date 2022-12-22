import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

function SelectInput({
  options,
  placeholder,
  selectedOption,
  setSelectedOption,
}) {
  const style = {
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      paddingRight: "0.9375vw",
      svg: {
        fill: "var(--clr-black)",
        width: "1.25vw",
        height: "1.25vw",
      },
      "@media only screen and (max-width: 480px)": {
        ...provided["@media only screen and (max-width: 480px)"],
        paddingRight: "13px",
        svg: {
          width: "1.25rem",
          height: "1.25rem",
        },
      },
    }),

    control: (provided) => ({
      ...provided,
      height: "2.5vw",
      minHeight: "1rem",
      borderRadius: 0,
      "@media only screen and (max-width: 480px)": {
        ...provided["@media only screen and (max-width: 480px)"],
        minHeight: "2.5rem",
      },
    }),

    valueContainer: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0,
      paddingLeft: "0.625vw",
      "@media only screen and (max-width: 480px)": {
        ...provided["@media only screen and (max-width: 480px)"],
        paddingLeft: "0.5625rem",
      },
    }),

    input: (provided) => ({
      ...provided,
      fontSize: "1vw",
      margin: 0,
      padding: 0,
      paddingLeft: "0.625vw",
      "@media only screen and (max-width: 480px)": {
        ...provided["@media only screen and (max-width: 480px)"],
        fontSize: "1rem",
      },
    }),
  };

  return (
    <Wrapper>
      <div className="select-container">
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder={
            <div className="select-placeholder-text">{placeholder}</div>
          }
          components={{
            IndicatorSeparator: () => null,
          }}
          className="select-box"
          styles={style}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .select-box {
    border: 1px solir red;
    min-height: 20px;
  }

  .select-placeholder-text {
    font-family: "Jost";
    font-size: 16px;
    font-weight: 300;
    color: var(--clr-black);
  }
`;

export default SelectInput;

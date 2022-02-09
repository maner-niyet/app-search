import React from "react";

const RadioButton = ({ id, handleRadio, radioBtn }) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        type="radio"
        name="location"
        onChange={handleRadio}
        checked={radioBtn === id}
        id={id}
      />
    </>
  );
};

export default RadioButton;

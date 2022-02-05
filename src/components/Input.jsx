import React from "react";

const Input = (props) => {
  return (
    <>
      <label htmlFor="search">search for state</label>
      <input
        type="text"
        id="search"
        placeholder="enter state name"
        onChange={props.handleChange}
        value={props.value}
      />
    </>
  );
};

export default Input;

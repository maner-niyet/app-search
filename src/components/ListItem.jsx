import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <h2>State name is {props.name}</h2>
      <h3>Capital is {props.capital}</h3>
      <p>Appbreviation {props.abbr}</p>
    </li>
  );
};

export default ListItem;

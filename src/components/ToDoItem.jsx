import React, { useState } from "react";

function ToDoItem(props) {
  const [style, setStyle] = useState({});
  function handleClick() {
    setStyle({
      textDecoration: "line-through",
    });
  }
  return (
    <li onClick={handleClick} style={style}>
      {props.text}
    </li>
  );
}

export default ToDoItem;

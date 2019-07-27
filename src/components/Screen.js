import React from "react";
import "./Screen.css";

export default function Screen(props) {
  return (
    <div id="screen_container">
      <h1>{props.display}</h1>
    </div>
  );
}

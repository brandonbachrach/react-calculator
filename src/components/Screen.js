import React from "react";
import "./Screen.css";

export default function Screen(props) {
  return (
    <div id="screen_container">
      <h1 onClick="this.select();">
        {props.display ? props.display : props.result}
      </h1>
    </div>
  );
}

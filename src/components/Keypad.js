import React from "react";
import "./Keypad.css";

export default function Keypad(props) {
  const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const operators = ["*", "/", "+", "-"];

  const numBtns = nums.map(num => (
    <button onClick={e => props.onClickNum(e.target.name)} name={num}>
      {num}
    </button>
  ));

  const opBtns = operators.map(op => (
    <button onClick={e => props.onClickOp(e.target.name)} name={op} key={op}>
      {op}
    </button>
  ));
  return (
    <div id="keypad_container">
      <section id="clear_container">
        <button onClick={props.displayVal ? props.onClear : props.onClearAll}>
          {props.displayVal ? "CE" : "AC"}
        </button>
      </section>
      <section id="plus_minus_container">
        <button onClick={props.onNegate}>+/-</button>
      </section>
      <section id="percent_container">
        <button onClick={props.onPercent}>%</button>
      </section>
      <section id="number_container">{numBtns}</section>
      <section id="operator_container">
        {opBtns}
        <button onClick={props.onCalc} name="=">
          =
        </button>
      </section>
    </div>
  );
}

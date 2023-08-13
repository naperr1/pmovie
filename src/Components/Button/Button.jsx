import React from "react";
import "./Button.scss";

const Button = (props) => {
  return <button className={`btn ${props.className}`}>{props.children}</button>;
};

export const ButtonOutLine = (props) => {
  return (
    <button className={`btn_outline ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;

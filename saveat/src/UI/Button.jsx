import React from "react";
import classes from "./Button.module.css";

export const Button = (props) => {
  const nothing = () => {};
  return (
    <button
      type={props.type}
      className={classes.btn}
      style={{ backgroundColor: props.color , border:props.border,color:props.contentColor}}
      onClick={props.onClick || nothing}
    >
      {props.content}
      {props.children}
    </button>
  );
};
export default Button;
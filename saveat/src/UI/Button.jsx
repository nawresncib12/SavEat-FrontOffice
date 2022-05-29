import React from "react";
import { useState } from "react";
import classes from "./Button.module.css";
import   "./Button.module.css";

export const Button = (props) => {
  const [clicked, setClicked] = useState(false)
  const nothing = () => {};
  return (
    <button 

      type={props.type}
      key={props.clicked}
      className = {(props.shake&&clicked) ? `${classes.btn } ${classes.shake}`:classes.btn   }   
      style={{ backgroundColor: props.color , border:props.border,color:props.contentColor}}
      onClick={ ()=>{ if(!clicked&&props.shake) {
        setClicked(true)
      
        
        {props.onClick()||nothing();setClicked(true)}}else{
          props.onClick()||nothing();
        }
          }    }
    >
      {props.content}
      {props.children}
    </button>
  );
};
export default Button;
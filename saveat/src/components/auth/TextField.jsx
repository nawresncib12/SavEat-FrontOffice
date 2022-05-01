import React from "react";
import { ErrorMessage, useField } from "formik";
import classes from "./TextField.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let styleError;
  let styleErrorInput;

  const [labelColor, setLabelColor] = useState("#A5A5A5");

  let failed = props.failed || "";
  let success = props.success || "";
  const [passVisible, setPassVisible] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const changeColor = () => {
    setIsFocus(true);
    setLabelColor("#4DAAAA");
  };
  const resetColor = () => {
    setIsFocus(false);
  };

  if (meta.touched && meta.error) {
    styleError = {
      border: "2px solid red",
    };
  }
  const passwordVisible = () => {
    if (passVisible === 0) {
      setPassVisible(1);
    } else {
      setPassVisible(0);
    }
  };

  let style;
  const getStyle = () => {
    if (meta.touched && meta.error) {
      style = styleError;
    }
  };
  return (
    <div className={classes.inputBox}>
      <label htmlFor={field.name} style={{ color: labelColor }}>
        {label}
      </label>
      {getStyle()}
      <div className={classes.input} style={style}>
        <input
          onFocus={changeColor}
          onBlur={resetColor}
          className={classes.formControl}
          {...field}
          {...props}
          autoComplete="off"
          style={isFocus && !meta.touched && !meta.error ? {} : styleErrorInput}
          type={passVisible ? "text" : props.type}
          maxLength={props.max}
        />
        {(props.type === "password" || props.type === "confirmPassword") && (
          <span onClick={passwordVisible} className={classes.passIcon}>
            {!passVisible ? (
              <Icon icon="bi:eye-slash" />
            ) : (
              <Icon icon="akar-icons:eye" />
            )}
          </span>
        )}

        {props.type === "email" && (
          <span className={classes.passIcon}>
            <Icon icon="fluent:mail-24-filled" />
          </span>
        )}
        {props.name === "phone" && (
          <span className={classes.passIcon}>
            <Icon icon="twemoji:flag-tunisia" color="white" />
          
          </span>
          
        )}
      </div>
      <div
        className={classes.error}
        style={props.type === "email"  && props.form==="signin" ? { marginBottom: "20px" } : {}}
      >
        {props.laoding  && <p style={{fontSize:"14px" , marginTop:'-3px'}}>Loader</p>}
        {failed === "incorrect Password" && <p style={{fontSize:"14px" , marginTop:'-3px'}}>{failed}</p>}
        {failed === "wrong code" && <p style={{fontSize:"16px" , margin:'0px' }}>{failed}</p>}
        {failed !== "" && failed !== "incorrect Password" && failed !== "wrong code"   &&<p >{failed}</p>}

        {success !== "" && props.form==="signin" && <p style={{ color: "#4DAAAA" }}>{success}</p>}
        {failed === "" && <ErrorMessage name={field.name} />}
      </div>
    </div>
  );
};

import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classes from './TextField.module.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let styleError;
  let styleErrorInput;
  let styleErrorIcon;
  const [passVisible,setPassVisible] = useState(false);
  const [labelColor,setLabelColor] = useState("#A5A5A5");

  if(meta.touched && meta.error) {
    styleError ={
      border: "1px solid red"
    }
    styleErrorInput ={
      borderTop: "1px solid red",
      borderBottom: "1px solid red"
    }
    styleErrorIcon = {
      display:"block"
    }

  }
  const passwordVisible = () => {
    setPassVisible(!passVisible);

  }
  const changeColor = () => {
    setLabelColor("#4DAAAA")
    styleError = {
      border: "3px solid #4DAAAA"

    }
  }
  return (
    <div className={classes.inputBox}>
      <label htmlFor={field.name} style={{color:labelColor}}>{label}</label>
      <div className={classes.input} style={styleError} >
       
        <input onFocus={changeColor} 
          className={classes.formControl}
          {...field} {...props} 
          autoComplete="off" style={styleErrorInput} type={passVisible && props.type === "password" ? "text" : props.type }
        />
        { props.type === "password" && <span onClick={passwordVisible} className={classes.passIcon}><Icon icon="akar-icons:eye" /></span>}
        
        { props.type === "email" && <span className={classes.passIcon}><Icon icon="fluent:mail-24-filled" /></span>}
      </div>
      <div className={classes.error}>
        <ErrorMessage name={field.name}  />
      </div>
     
    </div>
  )
}
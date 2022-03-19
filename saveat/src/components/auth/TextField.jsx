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
  return (
    <div className={classes.inputBox}>
      <label htmlFor={field.name}>{label}</label>
      <div className={classes.input} style={styleError}>
       
        <input
          className={classes.formControl}
          {...field} {...props} 
          autoComplete="off" style={styleErrorInput} type={passVisible && props.type === "password" ? "text" : props.type }
        />
        { props.type === "password" && <span onClick={passwordVisible} className={classes.passIcon}><Icon icon="akar-icons:eye" /></span>}
          <span style={styleErrorIcon} className={classes.errorIcon}><Icon icon="bx:error-circle" /></span>
         
      </div>
      
      <ErrorMessage component="div" name={field.name} className={classes.error} />
    </div>
  )
}
import React from 'react'
import classes from './Button.module.css';

export const Button = (props) => {
  return (
    <button type={props.type} className={classes.btn} style={{backgroundColor:props.color}}>
        {props.content}
    </button>
  )
}

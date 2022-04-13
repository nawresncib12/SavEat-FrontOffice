import React from 'react'
import classes from './StepCircle.module.css';

export const StepCircle = (props) => {
  return (
    <div className={classes.stepCircle} style={{backgroundColor:props.color}}>
        <p>{props.number}</p>
    </div>
  )
}

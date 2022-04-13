import React from 'react'
import classes from './StepTwo.module.css';
import { TextField } from './TextField';
import { Timer } from '../../UI/Timer';
import { Button } from '../../UI/Button';
export const StepTwo = (props) => {
  return (
    <div className={classes.stepTwo}>
                        <h5 className={classes.note}>We sent a verification code to *******@***.***</h5>
                        <h5 className={classes.note} style={{marginTop:"-10px"}}>Please enter your code </h5>
                        <TextField label="Verification Code" name="verificationcode" type="text" failed={props.failed}/>
                        <h5 className={classes.note} style={{display:"flex",marginTop:"0"}}>Code expires in <Timer /> </h5>
                        <div className={classes.submit}>
                          <Button color="#4DAAAA" content="Sign Up " type="submit" />
                        </div>
                    </div>
  )
}

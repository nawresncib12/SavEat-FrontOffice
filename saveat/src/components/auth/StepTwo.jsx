import React from 'react'
import classes from './StepTwo.module.css';
import { TextField } from './TextField';
import { Timer } from '../../UI/Timer';
import { Button } from '../../UI/Button';
export const StepTwo = (props) => {
  return (
    <div>
                        <h5 className={classes.note}>We sent a verification code to *******@***.***</h5>
                        <h5 className={classes.note} style={{marginTop:"-10px"}}>Please enter your code </h5>
                        <TextField label="Verification Code" name="verificationCode" type="text" />
                        <h5 className={classes.note} style={{display:"flex",marginTop:"0"}}>Code expires in <Timer expiryTimestamp={props.time} /> </h5>
                        <h5 style={{marginTop:"-10px"}} className={classes.note}>Resend Code ?</h5>
                        <div className={classes.submit}>
                          <Button color="#4DAAAA" content="Sign Up " type="button" onClick={props.nextHandler}/>
                        </div>
                    </div>
  )
}

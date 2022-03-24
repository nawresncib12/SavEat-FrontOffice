import React from 'react'
import { TextField } from './TextField'
import { Button } from '../../UI/Button';
import classes from './StepOne.module.css';
export const StepOne = (props) => {
return (
    <div>
        <div>
                        
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <div className={classes.submit} >
                       
                            <div className={classes.nextBtn} ><Button type="submit" color="#4DAAAA" content=" >>> " onClick={props.nextHandler} /></div>

                        </div>
        </div>
    </div>
  )
}

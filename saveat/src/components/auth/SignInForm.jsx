import React from 'react'
import classes from './SignInForm.module.css';
import { Button } from '../../UI/Button';
import { Icon } from '@iconify/react';
export const SignInForm = () => {
  return (
    <div className={classes.signInForm}>
        <div className={classes.header}>
            <div className={classes.headerIcon}>
                <Icon icon="teenyicons:signin-outline" />
            </div>
            <h2 className={classes.title}>Sign In</h2>    
        </div>
        <form action="" method="">
            <div className={classes.inputBox}>
                <h3>Email :</h3>
                <input type="text" name="email" />
            </div>
            <div className={classes.inputBox}>
                <h3>Password :</h3>
                <input type="password" name="password" />
                <h5 className={classes.note}>Must be longer than 8 characters and contain capital letters</h5>
            </div>
            <div className={classes.submit}>
                <Button color="#4DAAAA" content="SIGN IN " type="submit"/>
                <h5 className={classes.note}>Forgot your password ?</h5>
            </div>
            

        </form>    
    </div>
  )
}

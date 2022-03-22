import React, { useState } from 'react'
import classes from './SignUpForm.module.css';
import { Button } from '../../UI/Button';
import { StepCircle } from '../../UI/StepCircle';
import { Icon } from '@iconify/react';
import { TextField } from './TextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Timer } from '../../UI/Timer';
export const SignUpForm = () => {

    const validate = Yup.object({
        email: Yup.string()
          .email('Email is invalid !')
          .required('Email is required !'),
        password: Yup.string()
        .required('Password is required !')
          .min(8, 'Password must be at least 8 charaters !'),
        confirmPassword: Yup.string()
        .required("Password's Confirmation is required !")
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        verificationCode: Yup.string()
        .required("Please Enter The Code")
        
          
          
      })
      const [next,setNext] = useState(1);
      const [time,setTime] = useState(new Date());
      const nextHandler = () => {
          if(next === 1) {
              setNext(2);
              setTime(new Date());
              time.setSeconds(time.getSeconds() + 600);
          } else if (next === 2) {
              setNext(3)
          }

      }
  return (
      
    <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
            console.log(values)
        }}
    >
        {formik => (
        <div className={classes.signUpForm}>
            <div className={classes.header}>
                <div className={classes.headerIcon}>
                    <Icon icon="teenyicons:signin-outline" />
                </div>
                <h2 className={classes.title}>Sign Up</h2>    
            </div>
            <div className={classes.stepContainer}>
                <StepCircle number="1" color={next>=1 ? "#4DAAAA" : "#E5E5E5"} />
                <div className={classes.line} style={next>=2 ? {borderColor:"#4DAAAA"} : {borderColor:"#E5E5E5"}}></div>
                <StepCircle number="2" color={next>=2 ? "#4DAAAA" : "#E5E5E5"}  />
                <div className={classes.line} style={next===3 ? {borderColor:"#4DAAAA"} : {borderColor:"#E5E5E5"}}></div>
                <StepCircle number="3" color={next>=3 ? "#4DAAAA" : "#E5E5E5"}  />
                
            </div>
            <div className={classes.form}>
                <Form>
                    {next===1 &&<div>
                        
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    </div>}
                    {next===2 && <div>
                        <h5 className={classes.note}>We sent a verification code to *******@***.***</h5>
                        <h5 className={classes.note} style={{marginTop:"-10px"}}>Please enter your code </h5>
                        <TextField label="Verification Code" name="verificationCode" type="text" />
                        <h5 className={classes.note} style={{display:"flex",marginTop:"0"}}>Code expires in <Timer expiryTimestamp={time} /> </h5>
                        <h5 style={{marginTop:"-10px"}} className={classes.note}>Resend Code ?</h5>
            
                    </div>}
                    {next===3 &&<div>
                        <h2>Success</h2>
            
                    </div>}
                   
                    
                 
                    <div className={classes.submit} >
                        {next===2 && <Button color="#4DAAAA" content="Sign Up " type="submit"/>}
                       
                        {next ===1 && <div className={classes.nextBtn} onClick={nextHandler}><Button type="button" color="#4DAAAA" content=" >>> "/></div>}
                        
                        {next ===3 && <div className={classes.nextBtn}><Button type="button" color="#4DAAAA" content=" Get To Home Page "/></div>}
                    </div>
                </Form> 
            </div>
        </div>
        )}
    </Formik>
  )
}

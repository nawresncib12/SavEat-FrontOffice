import React, { useState } from 'react'
import classes from './SignUpForm.module.css';
import { Button } from '../../UI/Button';
import { StepCircle } from '../../UI/StepCircle';
import { Icon } from '@iconify/react';
import { TextField } from './TextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Timer } from '../../UI/Timer';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { Success } from './Success';
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
      const nextHandler = (e) => {
          e.preventDefault()
          if(next === 1) {
              setNext(2);
              setTime(new Date());
              time.setSeconds(time.getSeconds() + 600);
          } else if (next === 2) {
              setNext(3)
          }

      }
      const handleSubmit = (e) => {
          e.preventDefault()
      }
  return (
      
    <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={validate}
        
        
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
                <Form onSubmit={handleSubmit}>
                    {next===1 && <StepOne nextHandler={nextHandler} /> }
                    {next===2 && <StepTwo time={time} nextHandler={nextHandler} /> }
                    {next ===3 && <Success />}
                   
                    
                 
                   
                </Form> 
            </div>
        </div>
        )}
    </Formik>
  )
}

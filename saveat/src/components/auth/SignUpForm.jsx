import React from 'react'
import classes from './SignUpForm.module.css';
import { Button } from '../../UI/Button';
import { Icon } from '@iconify/react';
import { TextField } from './TextField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
export const SignUpForm = () => {

    const validate = Yup.object({
        email: Yup.string()
          .email('Email is invalid !')
          .required('Email is required !'),
        password: Yup.string()
        .required('Password is required !')
          .min(8, 'Password must be at least 8 charaters !'),
        confirmpassword: Yup.string()
        .required('Password Confirmation Required !')
        
          
          
      })
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
        <div className={classes.signInForm}>
            <div className={classes.header}>
                <div className={classes.headerIcon}>
                    <Icon icon="teenyicons:signin-outline" />
                </div>
                <h2 className={classes.title}>Sign Up</h2>    
            </div>
            <div className={classes.form}>
                <Form>
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="Password" name="password" type="password" />
                 
                    <div className={classes.submit}>
                        <Button color="#4DAAAA" content="Sign In " type="submit"/>
                        <h5 className={classes.note}>Forgot your password ?</h5>
                    </div>
                    

                </Form> 
            </div>
               
        </div>
        )}
    </Formik>
  )
}

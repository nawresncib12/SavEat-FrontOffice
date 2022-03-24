import React, { useState } from "react";
import classes from "./SignUpForm.module.css";
import { Button } from "../../UI/Button";
import { StepCircle } from "../../UI/StepCircle";
import { Icon } from "@iconify/react";
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Timer } from "../../UI/Timer";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { Success } from "./Success";


export const SignUpForm = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !")
      .matches(/^(?=.*[A-Z])/,
      "Must Contain 8 Characters & One Uppercase"
    )
      ,
      
    confirmpassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords Must Match !"
        )
      })
     

  });
  const validateCode = Yup.object({
    verificationcode:Yup.string()
.required("Please Enter The Code!")
})
  const [next, setNext] = useState(1);
  const [time, setTime] = useState(new Date());
  const nextHandler = () => {
    if (next === 1) {
      setNext(2);
      setTime(new Date());
      time.setSeconds(time.getSeconds() + 600);
    } else if (next === 2) {
      setNext(3);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={next===1 ? validate : validateCode}
      onSubmit={(values) => {
        nextHandler();
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={classes.signUpForm}>
          <div className={classes.header}>
            <h2 className={classes.title}>Sign up</h2>
          </div>
          <div className={classes.stepContainer}>
            <StepCircle number="1" color={next >= 1 ? "#4DAAAA" : "#E5E5E5"} />
            <div
              className={classes.line}
              style={
                next >= 2
                  ? { borderColor: "#4DAAAA", backgroundColor: "#4DAAAA" }
                  : { borderColor: "#E5E5E5" }
              }
            ></div>
            <StepCircle number="2" color={next >= 2 ? "#4DAAAA" : "#E5E5E5"} />
            <div
              className={classes.line}
              style={
                next === 3
                  ? { borderColor: "#4DAAAA", backgroundColor: "#4DAAAA" }
                  : { borderColor: "#E5E5E5" }
              }
            ></div>
            <StepCircle number="3" color={next >= 3 ? "#4DAAAA" : "#E5E5E5"} />
          </div>
          <div className={classes.form}>
            
              {next === 1 && <Form><StepOne /></Form>}
              {next === 2 && <Form><StepTwo time={time} /></Form>}
              {next ===3 && <Success />}
              
            
          </div>
        </div>
      )}
    </Formik>
  );
};
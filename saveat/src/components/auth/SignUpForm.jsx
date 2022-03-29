import React, { useState } from "react";
import classes from "./SignUpForm.module.css";
import { StepCircle } from "../../UI/StepCircle";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SocialMediaBox } from "./SocialMediaBox";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { Success } from "./Success";
import { signUp, verifySignup } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
export const SignUpForm = () => {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !")
      .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
  });
  const validateCode = Yup.object({
    verificationcode: Yup.string().required("Please Enter The Code!"),
  });
  const [next, setNext] = useState(1);
  const nextHandler = () => {
    if (next === 1) {
      setNext(2);
    } else if (next === 2) {
      setNext(3);
    }
  };

  const [failed, setFailed] = useState("");
  const [failedVerify, setFailedVerify] = useState("");
  const submitSignup = async (values) => {
    let data = { email: values.email, password: values.password };
    const res = await signUp(data);
    if (res === "true") {
      nextHandler();
    } else {
      setFailed(res);
    }
  };
  const verifyAccount = async (values) => {
    let verifyData = { code: values.verificationcode };
    const res = await verifySignup(verifyData);
    if (res === "true") {
      nextHandler();
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setFailedVerify(res);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={next === 1 ? validate : validateCode}
      onSubmit={(values) => {
        next === 1 ? submitSignup(values) : verifyAccount(values);
      }}
    >
      {(formik) => (
        <div className={classes.signUpForm}>
          <div className={classes.header}>
            <h3 className={classes.title}>Sign up</h3>
            <SocialMediaBox type="Sign up" />
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
            {next === 1 && (
              <Form>
                <StepOne failed={failed} />
              </Form>
            )}
            {next === 2 && (
              <Form>
                <StepTwo failed={failedVerify} />
              </Form>
            )}
            {next === 3 && <Success />}
          </div>
        </div>
      )}
    </Formik>
  );
};

import React, { useState } from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../UI/Button";
import { SocialMediaBox } from "./SocialMediaBox";
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login,forgotPassword } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
import Fpassword from "./Fpassword";
export const SignInForm = (props) => {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });
  const validateForgotPass = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
  });
  const [failed, setFailed] = useState("");
  const [failedForgot, setFailedForgot] = useState("");
  const submitForm = async (values) => {
    let data = { email: values.email, password: values.password };
    const res = await login(data);
    if (!res) {
      setFailed("These credentials don't match any account");
    } else {
      props.onSubmitForm();
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };
  const submitFpass = async (values) => {
    let data = { email: values.email };
    const res = await forgotPassword(data);
    if (!res) {
      setFailedForgot("There is no account with this email address!");
    } else {
      setFailedForgot("Please check your email to continue");
    }
  };
  const [forgotPass, setForgotPass] = useState(false);
  const forgotPassHandler = () => {
    setForgotPass(true);
  };

  const hideFpass = () => {
    setForgotPass(false);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={forgotPass ? validateForgotPass : validate}
      onSubmit={(values) => {
        forgotPass ? submitFpass(values) : submitForm(values);
      }}
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <h3 className={classes.title}>{forgotPass ?"Resetting password":"Sign in"}</h3>
          </div>
          {!forgotPass && (
            <div className={classes.form}>
              <SocialMediaBox type="Sign in" />

              <Form>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  form="signin"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  form="signin"
                  failed={failed}
                />
                <h5
                  className={classes.note}
                  style={{ textAlign: "right", marginTop: "10px" }}
                  onClick={forgotPassHandler}
                >
                  Forgot your password ?
                </h5>
                <div className={classes.submit}>
                  <Button color="#4DAAAA" content="Submit" type="submit" />
                </div>
              </Form>
            </div>
          )}

          {forgotPass && (
            <Form>
              <Fpassword hideFpass={hideFpass}
              
              failed={failedForgot}
              ></Fpassword>
            </Form>
          )}
        </div>
      )}
    </Formik>
  );
};

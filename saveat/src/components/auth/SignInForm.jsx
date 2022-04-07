import React, { useState } from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../UI/Button";
import { SocialMediaBox } from "./SocialMediaBox";
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login, forgotPassword, resetPassword } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
import Fpassword from "./Fpassword";
export const SignInForm = (props) => {
  const resetPass = props.resetPass;
  const token = props.token || "";
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });
  const validateResetPass = Yup.object({
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });
  const validateForgotPass = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
  });
  const [newPassword, setNewPassword] = useState("");
  const getpassword = (e) => {
    setNewPassword(e.target.value);
  };
  const [failed, setFailed] = useState("");
  const [failedForgot, setFailedForgot] = useState("");
  const [failedReset, setFailedReset] = useState("");
  const [loadingReset, setLoadingReset] = useState(false);
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
    setLoadingReset(true);
    let data = { email: values.email };
    const res = await forgotPassword(data);
    if (!res) {
      setLoadingReset(false);
      setFailedForgot("There is no account with this email address!");
    } else {
      setLoadingReset(false);
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
  const submitResetpass = async (values) => {
    const res = await resetPassword({ password: newPassword }, token);
    if (!res) {
      setFailedReset("Problem Resetting Password");
    } else {
      navigate("/login", { state: { toggle: true } });
    }
  };
  const validatePass = forgotPass ? validateForgotPass : validateResetPass;
  const submitPass = (values) => {
    if (forgotPass) {
      submitFpass(values);
    } else {
      submitResetpass(values);
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={!forgotPass && !resetPass ? validate : validatePass}
      onSubmit={(values) => {
        !forgotPass && !resetPass ? submitForm(values) : submitPass(values);
      }}
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <h3 className={classes.title}>
              {forgotPass ? "Resetting password" : ""}
              {resetPass ? "Resetting password" : ""}
              {!forgotPass && !resetPass ? "Sign in" : ""}
            </h3>
          </div>
          {!forgotPass && !resetPass && (
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
              <Fpassword
                hideFpass={hideFpass}
                loadingReset={loadingReset}
                failed={failedForgot}
              ></Fpassword>
            </Form>
          )}
          {resetPass && (
            <Form>
              <div onChange={getpassword}>
                <TextField
                  label="New Password"
                  name="password"
                  type="password"
                  failed={failedReset}
                />
                <br />
                <div className={classes.submit}>
                  <Button color="#4DAAAA" content="Submit" type="submit" />
                </div>
              </div>
            </Form>
          )}
        </div>
      )}
    </Formik>
  );
};

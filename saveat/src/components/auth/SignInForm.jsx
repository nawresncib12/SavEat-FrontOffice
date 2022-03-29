import React, { useState } from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../UI/Button";
import { SocialMediaBox } from "./SocialMediaBox";
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
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
  const [failed, setFailed] = useState("");
  const submitForm = async (values) => {
    let data = { email: values.email, password: values.password };
    const res = await login(data);
    if (!res) {
      setFailed("These credentials don't match any account");
    }else{
      props.onSubmitForm();
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <h3 className={classes.title}>Sign in</h3>
            
          </div>
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
              <h5 className={classes.note} style={{ textAlign: "right", marginTop:"10px" }}>
                Forgot your password ?
              </h5>
              <div className={classes.submit}>
                <Button color="#4DAAAA" content="Submit" type="submit" />
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

import React from "react";
import classes from "./SignInForm.module.css";
import { Button } from "../../UI/Button";
import { SocialMediaBox } from "./SocialMediaBox";
import { Icon } from "@iconify/react";
import { TextField } from "./TextField";

import { Formik, Form } from "formik";
import * as Yup from "yup";
export const SignInForm = (props) => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        props.onSubmitForm();
        console.log(values);
      }}
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <h2 className={classes.title}>Sign in</h2>
          </div>
          <div className={classes.form}>
            <Form>
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <h5 className={classes.note}>Forgot your password ?</h5>
              <div className={classes.submit}>
                <Button color="#4DAAAA" content="Submit" type="submit" />
                <SocialMediaBox />
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

import {React, useState} from 'react'
import { TextField } from '../auth/TextField';
import style from './EditSettings.module.css';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { EmailPassSwitcher } from './emailpassswitcher/EmailPassSwitcher'
import { Button } from '../../UI/Button';
const EditSettings = () => {
  const [isClicked,setIsClicked] = useState('password');

    const switchMode = () => {
        isClicked === 'password' ? setIsClicked('email') : setIsClicked('password');
    }
    const validate = Yup.object({
      oldpassword:Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !")
      .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
      newpassword: Yup.string()
        .required("Password is required !")
        .min(8, "Password must be at least 8 charaters !")
        .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
      confirmpassword: Yup.string().when("newpassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords Must Match !"),
      }),
    });
  return (
    <Formik
    initialValues={{
    oldpassword:"",
    newpassword:"",
    confirmpassword:""
  }
  }
  validationSchema={validate}
  onSubmit={(values) => {
    console.log(values);
  }}
  >
  {(formik) => (
    <div className={style.container}>
        <div className={style.title}><h1>ACCOUNT SETTINGS</h1> </div>
        <div className={style.cont}>
            <div className={style.switcherContainer}>
              <EmailPassSwitcher switchMode={switchMode} isClicked={isClicked} />
            </div>
            <div className={style.formContainer}>
              {
                isClicked === "password" ? 
                <div className={style.passContainer}>
                    <TextField
                      label="Old Password"
                      name="oldpassword"
                      type="password"
                    />
                    <TextField
                      label="New Password"
                      name="newpassword"
                      type="password"
                    />
                    <TextField
                      label="Confirm New Password"
                      name="confirmpassword"
                      type="password"
                    />
                    <Button content="Save" color="#6CD6D6" />
                </div>
                 :



                 <div className={style.passContainer}>
                 <TextField
                   label="Password"
                   name="password"
                   type="password"
                 />
                 <TextField
                   label="New Email"
                   name="newemail"
                   type="email"
                 />
                
                 <Button content="Save" color="#6CD6D6" />
             </div>
              }
            </div>
            
        </div>
    </div>
    )}
    </Formik>
  )
}

export default EditSettings
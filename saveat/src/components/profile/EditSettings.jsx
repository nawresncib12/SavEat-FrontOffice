import {React, useState} from 'react'
import { TextField } from '../auth/TextField';
import style from './EditSettings.module.css';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { EmailPassSwitcher } from './emailpassswitcher/EmailPassSwitcher'
import { Button } from '../../UI/Button';
import { updatePassword,updateEmail,verifyEmail } from "../../api/api.user";
import { Loader } from "../../UI/Loader";
import ButtonLoader from "../../UI/ButtonLoader";


const EditSettings = () => {
  const [isClicked,setIsClicked] = useState('password');
  const [loading,setLoading] = useState(false);
  const [loading2,setLoading2] = useState(false);
  const [err,setErr] = useState('');
  const [codeErr,setCodeErr] = useState('');
  const [emailSent,setEmailSent] = useState(false);

  /////////////////////////////////////////////////////////////////////////////////////////
  const [passwordUpdated, setPasswordUpdated] = useState(false)
  const [emailUpdated, setEmailUpdated] = useState(false)
///////////////////////////////////////////////////////////////////////////////////////////

    const switchMode = () => {
        isClicked === 'password' ? setIsClicked('email') : setIsClicked('password');
    }
    const validate = Yup.object({
      password:Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !")
      .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
      newPassword: Yup.string()
        .required("Password is required !")
        .min(8, "Password must be at least 8 charaters !")
        .matches(/^(?=.*[A-Z])/, "Must Contain 8 Characters & One Uppercase"),
      confirmpassword: Yup.string().when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("newPassword")], "Passwords Must Match !"),
      }),
    });
  return (
    <Formik
    initialValues={{
    password:"",
    newPassword:"",
    confirmpassword:"",

    password:"",
    newEmail:"",
    code:""
    }
  }
  validationSchema={isClicked === "password" ? validate : null}
  onSubmit={async(values) => {
    if(isClicked=='password'){

      if(!await updatePassword(values) )setErr("incorrect Password")
      else{
        setPasswordUpdated(true)
        setErr("")
        
      }
     }
     else{

      if(values.code){
        setLoading2(true)
      console.log(values)
      if(!await verifyEmail(values) ){
        setLoading2(false)
        console.log("code wrong")
        setCodeErr("wrong code")
      }
      else{
        setLoading2(false)
        setEmailUpdated(true)
        setCodeErr("")
      }
      }else{ 
        setLoading(true)
        if(!await updateEmail(values) ){setErr("incorrect Password") ;setLoading(false)
      }
        else{
          setLoading(false)
          setEmailSent(true)
          setErr("")
        }
      }
      
     }
  }}
  >
  {(formik) => (
    <div className={style.container}>
        <div className={style.title}><h1>ACCOUNT SETTINGS</h1> </div>
        <div className={style.cont}>
        <div >
            <div className={style.switcherContainer}>
              <EmailPassSwitcher switchMode={switchMode} isClicked={isClicked} />
            </div>
            <div className={style.formContainer}>
              {
                isClicked === "password" ? 
                <Form>
                   <div className={style.passContainer}>
                    <TextField
                      label="Old Password"
                      name="password"
                      type="password"
                      failed={err}

                    />
                    <TextField
                      label="New Password"
                      name="newPassword"
                      type="password"
                    />
                    <TextField
                      label="Confirm New Password"
                      name="confirmpassword"
                      type="password"
                    />
                    <Button content="Save" color="#6CD6D6" type="submit" />
                   </div>
                </Form>
               
                 :



                 <Form>
                  <div className={style.passContainer}>
                    <TextField
                      label="password"
                      name="password"
                      type="password"
                      failed={err}

                    />
                    <TextField
                      label="New Email"
                      name="newEmail"
                      type="email"
                    />
                    {loading && <div style={{height:"10px" ,display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"center",width:'100%'}}><ButtonLoader/></div> }
                    {emailSent &&(
                      <>
                    <div style={{    color: "#ffa600",
                    fontSize: "18px",
                    marginBottom: "15px"
                    }}> email sent to your new address</div>
                    <TextField
                      label="Verification code"
                      name="code"
                      type="text"
                      failed={codeErr}

                      />
                      {loading2 && <div style={{height:"10px" ,display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"center",width:'100%'}}><ButtonLoader/></div> }
                      </>

                      )}
                    
                    <Button content="Save" color="#6CD6D6" type="submit" />
                  </div>
             </Form>
              }
            </div>
            
        </div>
        </div> 
    </div>
    )}
    </Formik>
  )
}

export default EditSettings
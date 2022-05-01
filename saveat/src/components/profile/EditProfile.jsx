import React, { useEffect, useState } from 'react'
import style from './EditProfile.module.css'
import { Form , Formik} from 'formik'
import { TextField } from '../auth/TextField'
import { Button } from '../../UI/Button'
import { Phone } from './phone/Phone'
import { updateUser } from "../../api/api.user";
import { loggedIn } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../UI/Loader";

 
const EditProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [percent, setPercent] = useState(0)
useEffect(() => {
  async function log() {
    const usr =await loggedIn()
    if (!usr) {
      navigate("/login");
    }else{
      if(!user){setUser(usr);
        let p = 0 ;
      if(usr.firstName)p++
      if(usr.lastName)p++
      if(usr.phone)p++
      if(usr.address)p++
      if(usr.birthday)p++
      setPercent(p)
      }
    }

  }
  log();

}, [navigate,user])
console.log(percent)
if(!user) return ( <div className={style.container} style={{animation:"none"}}><Loader/></div>)
  return (
    <Formik
      initialValues={{
      firstName: user.firstName,
      lastName:user.lastName,
      birthday:user.birthday,
      phone:user.phone,
      address:user.address
    }
    }
    onSubmit={(values) => {
      updateUser(values);
    }}
    >
    {(formik) => (
    <div className={style.container}>
        <div className={style.title}><h1>PROFILE</h1> </div>
        <div className={style.formMiddle}>
            <Form autoComplete='false'>
                  <div className={style.inputGroup}>
                    <TextField
                      label="FirstName"
                      name="firstName"
                      type="text"
                    />
                    <TextField
                      label="LastName"
                      name="lastName"
                      type="text"
                      
                      
                    />
                  </div>
                  <div className={style.inputGroup}>

                    <Phone />
                    <TextField
                      label="Birthday"
                      name="birthday"
                      type="date"
                      
                      
                    />
                  </div>
                  <div className={style.inputGroupA}>
                    <TextField
                      label="Address"
                      name="address"
                      type="text"
                      max="30"
                    
                    />
                  </div>
                  <div className={style.submit}>
                    <Button color="#6CD6D6" content="Save" type="submit" />
                  </div>
            </Form>

          
         

        </div>
    </div>
     )}
     </Formik>
  )
}

export default EditProfile
import React from 'react'
import style from './EditProfile.module.css'
import { Form , Formik} from 'formik'
import { TextField } from '../auth/TextField'
import { Button } from '../../UI/Button'
const EditProfile = () => {
  return (
    <Formik
      initialValues={{
      firstname:"",
      lastname:"",
      birthday:"",
      phone:"",
      address:""  
    }
    }
    onSubmit={(values) => {
      console.log(values);
    }}
    >
    {(formik) => (
    <div className={style.container}>
        <div className={style.title}><h1>PROFILE</h1> </div>
        <div className={style.formMiddle}>
            <Form>
                  <div className={style.inputGroup}>
                    <TextField
                      label="Firstname"
                      name="firstname"
                      type="text"
                    
                    />
                    <TextField
                      label="Lastname"
                      name="lastname"
                      type="text"
                      
                      
                    />
                  </div>
                  <div className={style.inputGroup}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="text"
                    
                    />
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
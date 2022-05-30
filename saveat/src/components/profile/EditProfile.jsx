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
import ButtonLoader from "../../UI/ButtonLoader";
import { connect } from 'react-redux';
import { update_Profile_Card } from '../redux/actions/actions'
const EditProfile = ({update_Profile_Card}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(false);
  const [updatedUser,setUpdatedUser] = useState(false);
useEffect(() => {
  async function log() {
    const usr =await loggedIn()
    if (!usr) {
      navigate("/login");
    }else{
      if(!user){setUser(usr);
        update_Profile_Card(usr)
      }
    }

  }
  log();

}, [navigate,user])
if(!user) return ( <div className={style.container} style={{animation:"none"}}><Loader/></div>)
  return (
    <Formik
      initialValues={{
      firstName: user.firstName,
      lastName:user.lastName,
      birthday: (user.birthday)?user.birthday.replace(/-/g ,"-").substring(0,10):"2000-08-14",
      phone:user.phone,
      address:user.address
    }
    }
    onSubmit={async(values) => {
      setLoading(true) ;setUpdatedUser(false  );        
      const usr = await updateUser(values)
      if (usr) {setLoading(false); setUpdatedUser(true);update_Profile_Card(usr)}
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
                  {loading && <div style={{height:"10px" ,display:"flex",alignItems:"center",marginBottom:"40px",justifyContent:"center",width:'100%'}}><ButtonLoader/></div> }

                  <div className={style.submit}>
                    <Button color="#6CD6D6" content="Save" type="submit"  onClick={()=>{}}/>
                  </div>
            </Form>

          
         

        </div>
    </div>
     )}
     </Formik>
  )
}
const mapDispatchToProps = (dispatch)=>{
  return{
    update_Profile_Card : (user)=>{ dispatch (update_Profile_Card(user)) }
  }
}
export default connect(null,mapDispatchToProps)(EditProfile)
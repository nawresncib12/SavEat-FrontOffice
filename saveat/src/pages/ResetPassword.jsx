import React,{useState} from 'react'
import { resetPassword } from "../api/api.user";
import { useParams } from 'react-router-dom';
const ResetPassword = () => {

const token= useParams();
const [newPassword, setNewPassword] = useState("")
const getpassword = (e)=>{
    setNewPassword(e.target.value)
}
  return (
      <div  onChange={getpassword}  >
          <input type="text" placeholder=' new password'/>
          <button type='submit' onClick={()=>{   resetPassword({password:newPassword},token)
      // loader 
    // redirection && notification success or fail
      
      }}>submit</button>
      </div>
  );
    
}

export default ResetPassword
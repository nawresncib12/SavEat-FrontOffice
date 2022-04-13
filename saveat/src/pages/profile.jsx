import React from 'react'
import SideBar from '../components/SideBar'
import ProfileCard from '../components/ProfileCard'
import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../api/api.user";
import EditProfile from '../components/EditProfile';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // useEffect(() => {
  //   async function log() {
  //     if (!(await loggedIn())) {
  //       setLoading(false)
  //       navigate("/login");
  //     }else{
  //       setLoading(false)
  //     }
  //   }
  //   log();
  // }, [navigate]);
  // const signout = async () => {
  //   const res = await logout();
  //   if (res) {
  //     navigate("/login");
  //   }
  // };

  const [active, setActive] = useState(0)
  const f = (x)=>{
    setActive(x)  
  }

  return (
    <div style={{display:"flex",height:"100%"}}>
        <SideBar fn = {f}/>
        {(active==0)&&<EditProfile/>}
        {(active==1)&&<div style={{width : "100%",display:"flex",alignItems:"center",justifyContent:"center"}}> change password</div>}
        {(active==2)&&<div style={{width : "100%",display:"flex",alignItems:"center",justifyContent:"center"}}> preference</div>}
        {(active==3)&&<div style={{width : "100%",display:"flex",alignItems:"center",justifyContent:"center"}}>cart</div>}
        {(active==4)&&<div style={{width : "100%",display:"flex",alignItems:"center",justifyContent:"center"}}>deals</div>}
        {(active==5)&&<div style={{width : "100%",display:"flex",alignItems:"center",justifyContent:"center"}}>others</div>}
        <ProfileCard/>
    </div>
  )
}

export default Profile
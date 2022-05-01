import React, { useEffect } from 'react'
import SideBar from '../components/profile/SideBar'
import ProfileCard from '../components/profile/ProfileCard'
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import EditProfile from '../components/profile/EditProfile';
import EditSettings from '../components/profile/EditSettings';
import Pereferences from '../components/profile/Pereferences';
import Cart from '../components/profile/Cart';
import Deals from '../components/profile/Deals';
import Orders from '../components/profile/Orders';
import ToggleButton from '../components/profile/toggle button/toggle'
import useWindowSize from '../components/windowSize'
const Profile = () => {
  const [loading, setLoading] = useState(true);
  const size = useWindowSize();

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
  console.log(size.width);
  useEffect(() => {
      if(window.screen.width<650) setActive(-1);
      else {setActive(preactive);      setphoneNav(false)
      }
  }, [window.screen.width])
  

  const [active, setActive] = useState((window.screen.width>650)?0:-1)
  const [preactive, setPrective] = useState(active)
  const [phoneNav, setphoneNav] = useState(false)

  const f = (x)=>{
    if(x>=0){
      setActive(x)
      setPrective(x)
    }
    else{
      setActive(-1-x)
      setPrective(-1-x)

      setphoneNav(true)
    }
  }

  return (
    <div style={{display:"flex",height:"100%",justifyContent:"center"}}>
      <ToggleButton fn = {f}/>
        <SideBar fn = {f}/>
        {(active===0)&&<EditProfile/>}
        {(active===1)&&<EditSettings/>}
        {(active===2)&&<Pereferences/>}
        {(active===3)&&<Cart/>}
        {(active===4)&&<Deals/>}
        {(active===5)&&<Orders/>}
        {!phoneNav&&<ProfileCard/>}
    </div>
  )
}

export default Profile
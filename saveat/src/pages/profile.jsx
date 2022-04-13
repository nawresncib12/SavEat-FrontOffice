import React from 'react'
import SideBar from '../components/SideBar'
import ProfileCard from '../components/ProfileCard'
const Profile = () => {
  return (
    <div style={{display:"flex",height:"100%"}}>
        <SideBar/>
        <div style={{width : "100%"}}></div>
        <ProfileCard/>
    </div>
  )
}

export default Profile
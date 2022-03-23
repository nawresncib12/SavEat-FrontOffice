import React from 'react'
import classes from './SocialMediaBox.module.css';
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';
export const SocialMediaBox = () => {
  return (
    <div className={classes.socialBox}>
        <img classname={classes.socialIcon} src={google} alt="" />
        <img classname={classes.socialIcon} src={facebook} alt="" />

    </div>
  )
}

import React, { useState } from 'react'
import classes from './EmailPassSwitcher.module.css';
import { Icon } from '@iconify/react';
export const EmailPassSwitcher = ({switchMode, isClicked}) => {
  
  
    
    return (
    <div className={classes.switcher}>
        <div onClick={switchMode} className={classes.password} style={isClicked === "password" ? {background:"#4DAAAA"} : null}>
            <Icon width="25px" height="25px" icon="ant-design:lock-filled" color={isClicked === "password" ? "white" : "#4DAAAA"} />
        </div>
        <div onClick={switchMode} className={classes.email} style={isClicked === "email" ? {background:"#4DAAAA"} : null}>
            <Icon width="25px" height="25px" icon="dashicons:email-alt" color={isClicked === "email" ? "white" : "#4DAAAA"} />
        </div>

    </div>
  )
}

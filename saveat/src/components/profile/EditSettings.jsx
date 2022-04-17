import {React, useState} from 'react'
import { TextField } from '../auth/TextField';
import style from './EditSettings.module.css'
import { EmailPassSwitcher } from './emailpassswitcher/EmailPassSwitcher'
const EditSettings = () => {
  const [isClicked,setIsClicked] = useState('password');

    const switchMode = () => {
        isClicked === 'password' ? setIsClicked('email') : setIsClicked('password');
    }
  return (
    <div className={style.container}>
        <div className={style.title}><h1>ACCOUNT SETTINGS</h1> </div>
        <div className={style.meriem}>
            <div className={style.switcherContainer}>
              <EmailPassSwitcher switchMode={switchMode} isClicked={isClicked} />
            </div>
            <div className={style.formContainer}>
              {
                isClicked === "password" ? 
                <h2>Password Settings</h2> :
                <h2>Email Settings</h2>
              }
            </div>
            
        </div>
    </div>
  )
}

export default EditSettings
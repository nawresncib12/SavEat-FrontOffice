import React from 'react'
import { useTimer } from 'react-timer-hook';
import classes from './Timer.module.css';
import { useNavigate } from 'react-router-dom';
const MyTimer = ({ expiryTimestamp }) => {
  const navigate = useNavigate();
    const {
        seconds,
        minutes
      } = useTimer({ expiryTimestamp, onExpire: () =>{
       navigate(0)
      } });
  
    return (
    <div className={classes.timer}>
         <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )
}
export const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() +300); // 5 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
import React from 'react'
import { useTimer } from 'react-timer-hook';
import classes from './Timer.module.css';

const MyTimer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
    <div className={classes.timer}>
         <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )
}
export const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
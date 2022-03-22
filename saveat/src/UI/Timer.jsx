import React from 'react'
import { useTimer } from 'react-timer-hook';
import classes from './Timer.module.css';

export const Timer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
    <div className={classes.timer}>
         <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )
}

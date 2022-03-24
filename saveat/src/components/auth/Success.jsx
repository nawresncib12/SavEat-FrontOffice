import React from 'react'
import { Button } from '../../UI/Button'
import classes from './Success.module.css'
import { Icon } from '@iconify/react';
import { Loader } from '../../UI/Loader';
export const Success = () => {
  return (
                  <div className={classes.successContainer}>
                        
                        <p>You've successfully created your account at SaveEat</p>
                        <p>You'll be redirected shortly to our home page</p>
        
                        <div className={classes.loader}><Loader /></div>
                        <p className={classes.loading}>Loading . . . </p>
                        
            
                    </div>
  )
}

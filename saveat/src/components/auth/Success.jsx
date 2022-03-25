import React from 'react'
import { Button } from '../../UI/Button'
import classes from './Success.module.css'
import { Icon } from '@iconify/react';
import { Loader } from '../../UI/Loader';
export const Success = () => {
  return (
                  <div className={classes.successContainer}>
                        
                        <p>Your account at SaveEat is being created</p>
                        <p>You'll be redirected shortly to our home page</p>
        
                        <div className={classes.loader}><Loader /></div>
                        <p className={classes.loading}>Loading . . . </p>
                        
            
                    </div>
  )
}

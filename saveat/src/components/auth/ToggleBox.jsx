import React from 'react'
import classes from './ToggleBox.module.css';
import { Icon } from '@iconify/react';
import { Circle } from './Circle';
import { motion } from 'framer-motion';


const CircleVariants = {
    initial: {
        opacity: 0,
        x:"-50%"
    },
    animate: {
        opacity: 1,
        x:"150%"

    },
    exit: {
        opacity: 0

    }
}
const IconVariants = {
    initialIcon: {
        opacity: 0,
        x:"50%"
    },
    animateIcon: {
        opacity: 1,
        x:"-270%"

    },
    exitIcon: {
        opacity: 0

    }
}
const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };
  
export const ToggleBox = ({note,isClicked,handleClick}) => {
  
    
    return (
    <div className={classes.toggleSection}>
        <h5>{note}</h5>
        <div className={classes.toggleBox}>

        { isClicked ? <motion.div onClick={handleClick}
                variants={CircleVariants}
                layout
                initial="initial"
                animate="animate"
                exit="exit"
                transition={spring}
            >
                <Circle />
            </motion.div> : <motion.div
                
                onClick={handleClick}>
                <Circle />
            </motion.div>}
            
        { isClicked ?  <motion.div 
                variants={IconVariants}
                layout
                initial="initialIcon"
                animate="animateIcon"
                exit="exitIcon"
                transition={spring}
                className={classes.icon}>
                <Icon color='#ffff' icon="teenyicons:signin-outline" />
            </motion.div> : <motion.div 
               
                className={classes.icon}>
                <Icon color='#ffff' icon="teenyicons:signin-outline" />
            </motion.div> }


        </div>
     </div>
  )
}

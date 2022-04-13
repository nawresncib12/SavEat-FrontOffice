import { motion } from 'framer-motion';
import React from 'react'
import classes from './InputBorder.module.css';

const variant1 = {
    init:{
        opacity:0,
        y:"100px"

    },
    animate:{
        opacity:1,
        y:"0"

    },
    exit:{
        opacity:0

    }
}
const variant2 = {
    init:{
        opacity:0,
        x:"-300px"

    },
    animate:{
        opacity:1,
        x:"0",
        transition:{
            delay:0.3
        }

    },
    exit:{
        opacity:0

    }
}
const variant3 = {
    init:{
        opacity:0,
        y:"-100px"

    },
    animate:{
        opacity:1,
        y:"0",
        transition:{
            delay:0.6
        }

    },
    exit:{
        opacity:0

    }
}
const variant4 = {
    init:{
        opacity:0,
        x:"300px"

    },
    animate:{
        opacity:1,
        x:"0",
        transition:{
            delay:0.9
        }

    },
    exit:{
        opacity:0

    }
}
export const InputBorder = () => {
  return (
    <motion.div className={classes.border}>
        <motion.div variants={variant1} initial="init" animate="animate" exit="exit" className={classes.div1}></motion.div>
        <motion.div variants={variant2} initial="init" animate="animate" exit="exit" className={classes.div2}></motion.div>
        <motion.div variants={variant3} initial="init" animate="animate" exit="exit" className={classes.div3}></motion.div>
        <motion.div variants={variant4} initial="init" animate="animate" exit="exit" className={classes.div4}></motion.div>
    </motion.div>
  )
}

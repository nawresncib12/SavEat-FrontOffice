import React from 'react'
import classes from './Cart.module.css'
const CartIcon = () => {
  return (
    <div className={classes.iconcart}>
        <div className={classes.cartline1} style={{backgroundColor: "#4DAAAA"}}></div>
        <div className={classes.cartline2} style={{backgroundColor: "#4DAAAA"}}></div>
        <div className={classes.cartline3} style={{backgroundColor: "#4DAAAA"}}></div>
        <div className={classes.cartwheel} style={{backgroundColor: "#4DAAAA"}}></div>
    </div>
  )
}

export default CartIcon
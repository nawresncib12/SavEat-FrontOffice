import React from 'react'
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/welcomePic.png'
import {Button} from '../../UI/Button'
const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
        <div className={classes.footerSection}>
            <h2>Getting Started</h2>
            <Link to="/shop" className={classes.link}>
                Browse Boxes
            </Link>
            <Link to="/shop" className={classes.link}>
                Save A Meal
            </Link>
            <Link to="/shop" className={classes.link}>
                Get A Deal
            </Link>
        </div>
        <div className={classes.footerSection}>
            <h2>Our Social Medias</h2>
            <Link to="/shop" className={classes.link}>
                fb
            </Link>
            <Link to="/shop" className={classes.link}>
                insta
            </Link>
        </div>
        <div className={classes.footerSectionContact}>
            <h2>Contact Us</h2>
            <div className={classes.btn}>
                <Button color="#FFBCBC" content="contact@saveat.com" />
            </div>
           
            <h4>Feel free to send your feedback to this address</h4>
        </div>

    </div>
  )
}

export default Footer
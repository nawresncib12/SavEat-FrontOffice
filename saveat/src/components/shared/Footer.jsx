import React from 'react'
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/welcomePic.png'
import {Button} from '../../UI/Button'
import { Icon } from '@iconify/react';
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
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
                <div className={classes.links}>
                    <Link to="/fb" className={classes.link}>
                        <Icon icon="akar-icons:facebook-fill" color="white" width="30px" height="30px" style={{marginRight:"20px"}}   />
                    </Link>
                    <Link to="/insta" className={classes.link}>
                        <Icon icon="akar-icons:instagram-fill" color="white" width="30px" height="30px" />
                    </Link>
                </div>
                
            </div>
            <div className={classes.footerSectionContact}>
                <h2>Contact Us</h2>
                <div className={classes.btn}>
                    <Button color="#FFBCBC" content="contact@saveat.com" />
                </div>
            
                <h4>Feel free to send your feedback to this address</h4>
            </div>
        </div>
        <hr />
        <h4 className={classes.copyrights}>COPYRIGHTS © 2022 SAVEAT</h4>
       

    </div>
  )
}

export default Footer
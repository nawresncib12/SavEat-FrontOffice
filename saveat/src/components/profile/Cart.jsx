import React from 'react'
import style from './Cart.module.css'
import cart from '../../common/data/cart.json';
import avatar from '../../assets/avatar1.svg'
import { Icon } from '@iconify/react';
const Cart = () => {
  return (
    <div className={style.container}>
        <div className={style.title}><h1>CART</h1> </div>
        <div className={style.meriem}>
          {
            cart.map((box) => {
              return (
                <div className={style.cartBox}>
                  <div className={style.side}>
                    <div className={style.pic}>
                      <img src={avatar} alt="" />
                      <h2>{box.box.category + ' '}{box.box.subcategory}</h2>
                    </div>
                    <div className={style.boxContent}>
                      <div className={style.measure}>
                        <Icon icon="akar-icons:circle-minus" width="30px" height="30px" color="#4DAAAA" />
                        <h3>1</h3>
                        <Icon icon="akar-icons:circle-plus" width="30px" height="30px" color="#4DAAAA" />
                        
                      </div>

                    </div>
                  </div>
                  
                  <hr style={{color:'#4DAAAA'}} />
                  
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Cart
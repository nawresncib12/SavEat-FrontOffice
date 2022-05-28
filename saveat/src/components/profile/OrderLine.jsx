import React, { useState } from "react";
import style from "./OrderLine.module.css";
import { Icon } from '@iconify/react';
const Order = ({order,index}) => {
  



  return (

             <div key={index} className={style.cartBox}>
              <div className={style.side}>
                <div className={style.pic}>
                  <h2>
                    {"Order N° "+order.order_num}
                    
                  </h2>
                </div>
                <div className={style.boxContent}>
                  <span className={style.status}>
                      {order.status}
                  </span>
                  <span className={style.price}>
                    
                    {"Total : "+order.total+" DT"}
                  </span>
                  

                </div>
              </div>

              
            </div>
          );
    

};

export default Order;
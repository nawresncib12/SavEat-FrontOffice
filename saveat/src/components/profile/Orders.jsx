import React from 'react'
import style from './Orders.module.css'
import order from '../../common/data/order.json';
import OrderLine from './OrderLine'
const Orders = () => {
  return (
    <div className={style.container}>
        <div className={style.title}><h1>ORDERS</h1> </div>
        <div className={style.meriem}>
        {order.map((orderItem, index) => {
    
          return (
            
            <div>
              <OrderLine order={orderItem} index={index} />
              {
                index !== order.length-1 && <hr />
              }
              
            </div>
            
          );
        })}

        </div>
    </div>
  )
}

export default Orders
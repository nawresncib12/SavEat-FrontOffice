import React from 'react'
import style from './Deals.module.css'
import deals from '../../common/data/deals.json';
const Deals = () => {
  return (
    <div className={style.container}>
        <div className={style.title}><h1>DEALS</h1> </div>
        <div className={style.meriem}>

          <div className={style.dealHeader}>
            <h2>DealID</h2>
            <h2>Restaurant</h2>
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Status</h2>
          </div>
        {deals.map((dealItem,index) => {
          return (
            
            <div>
              <div key={index} className={style.dealHeader}>
              
              
              
              
              <h4>{dealItem.id}</h4>
              <h4>{dealItem.offer.restaurant}</h4>
              <h4>{dealItem.offer.product}</h4>
              <h4>{dealItem.offer.new_price}</h4>
              <h4>{dealItem.status}</h4>
             
           
           
              </div>
              {index!== deals.length-1 && <hr />}
            </div>
            
            
          );
        })}
        </div>
    </div>
  )
}

export default Deals
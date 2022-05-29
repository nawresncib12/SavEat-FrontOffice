import React, { useState } from "react";
import style from "./CartLine.module.css";
import avatar from "../../assets/avatar1.svg";
import { Icon } from '@iconify/react';
import Box from "../shop/Box";
import { removeFromCart } from '../redux/actions/actions';
import { connect } from 'react-redux';

const Cart = ({box,index,removeFromCart}) => {
  
  const [amount,setAmount] = useState(1);
  const [price,setPrice] = useState(box.price)
  const handlePlus = () => {
      setAmount(amount+1);
      setPrice(price*2)
  }
  const handleMinus = () => {
      if(amount >1 )
        {setAmount(amount-1);
        setPrice(price/2);}
  }


  return (

             <div key={index} className={style.cartBox}>
              <div className={style.side}>
                <div className={style.pic}>
                  <img src={avatar} alt="" />
                  <h2>
                    {box.category + " "}
                    {box.subcategory+ " Box"}
                  </h2>
                </div>
                <div className={style.boxContent}>
                  <span className={style.price}>
                    {price+" DT"}
                  </span>
                  <div className={style.options}>
                    <Icon icon="akar-icons:circle-minus" color="#4DAAAA" width="25px" height="25px" style={{cursor:"pointer"}} onClick={handleMinus} />
                    <span>{amount}</span>
                    <Icon icon="akar-icons:circle-plus" color="#4DAAAA" width="25px" height="25px" style={{cursor:"pointer"}} onClick={handlePlus}/>
                    <div className={style.trash}>
                     <Icon icon="bi:trash-fill" color="#4DAAAA" width="20px" height="20px" style={{cursor:"pointer"}} onClick={()=>{removeFromCart(box.id);console.log("delete",box.id)}} />
                    </div>
                    
                  </div>
                  

                </div>
              </div>

              
            </div>
          );
    

};

const mapDispatchToProps=(dispatch)=>{
  return {
    removeFromCart : (id)=> dispatch(removeFromCart(id))
  }
}

export default  connect(null,mapDispatchToProps)(Cart);

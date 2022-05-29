import React, { useState } from "react";
import style from "./Cart.module.css";
import cart from "../../common/data/cart.json";
import CartLine from './CartLine';
import Button from "../../UI/Button";
import CartModal from "./CartModal";
import { connect } from 'react-redux';

import { Icon } from '@iconify/react';
const Cart = ({boxes}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      {open && <CartModal setOpen={setOpen}></CartModal>}
      <div className={style.title}>
        <h1>CART</h1>
      </div>
      <div className={style.meriem}>
        {boxes.map((box, index) => {
          if(boxes.length>0 )return (
            
            <div>
              <CartLine box={box} index={index} />
              {
                index !== cart.length-1 && <hr />
              }
              
            </div>
            
          );
        })}

       {(boxes.length>0 )? <Button
          onClick={() => {
            setOpen(true);
          }}
          color="#4DAAAA"
        >
          Submit
        </Button> : <h2 style={{textAlign:"center"}}>
          your cart is empty
        </h2>
          }
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>{
  return {
      boxes: state.cartReducer
  }
}
export default  connect(mapStateToProps)(Cart);

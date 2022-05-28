import React, { useState } from "react";
import style from "./Cart.module.css";
import cart from "../../common/data/cart.json";
import CartLine from './CartLine';
import Button from "../../UI/Button";
import CartModal from "./CartModal";
import { Icon } from '@iconify/react';
const Cart = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      {open && <CartModal setOpen={setOpen}></CartModal>}
      <div className={style.title}>
        <h1>CART</h1>
      </div>
      <div className={style.meriem}>
       <div className={style.headers}>
         <h2>Name </h2>
         <div className={style.headerOpt}>
         <h2 className={style.price}>Price</h2>
         <h2>Amount</h2>
         </div>
         

       </div>
        {cart.map((box, index) => {
          console.log(index)
          return (
            
            <div>
              <CartLine box={box} index={index} />
              {
                index !== cart.length-1 && <hr />
              }
              
            </div>
            
          );
        })}
        <Button
          onClick={() => {
            setOpen(true);
          }}
          color="#4DAAAA"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Cart;
import React, { useState } from "react";
import style from "./Cart.module.css";
import CartLine from './CartLine';
import Button from "../../UI/Button";
import CartModal from "./CartModal";
import { connect } from 'react-redux';
import CartIcon from "../../UI/CartIcon";
import { useNavigate } from "react-router-dom";
const Cart = ({boxes}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      {open && <CartModal setOpen={setOpen}></CartModal>}
      <div className={style.title}>
        <h1>CART</h1>
      </div>
      <div className={style.meriem}>
        {boxes.map((box, index) => {
          if(boxes.length>0 )return (
            
            <div key={box.id}>
              <CartLine box={box} index={index} />
              {
                // index !== cart.length-1 && 
                <hr />
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
        </Button> : 
          <div className={style.cartEmpty}>
            <h2 style={{textAlign:"center",color:"#FFBCBC"}}>You cart is empty </h2>
            <CartIcon></CartIcon>
            <div style={{width:"50%"}}>
              <Button color="#4DAAAA" content="See Shop" onClick={() => navigate('/shop')} />
            </div>
            
          </div>
          
       
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

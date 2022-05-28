import React, { useState } from "react";
import style from "./Cart.module.css";
import cart from "../../common/data/cart.json";
import avatar from "../../assets/avatar1.svg";
import Button from "../../UI/Button";
import CartModal from "./CartModal";
const Cart = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      {open && <CartModal setOpen={setOpen}></CartModal>}
      <div className={style.title}>
        <h1>CART</h1>
      </div>
      <div className={style.meriem}>
        {cart.map((box, index) => {
          return (
            <div key={index} className={style.cartBox}>
              <div className={style.side}>
                <div className={style.pic}>
                  <img src={avatar} alt="" />
                  <h2>
                    {box.box.category + " "}
                    {box.box.subcategory}
                  </h2>
                </div>
                <div className={style.boxContent}></div>
              </div>

              <hr style={{ color: "#4DAAAA" }} />
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
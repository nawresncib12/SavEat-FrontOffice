import React, { useState } from "react";
import style from "./OrderLine.module.css";
import { Icon } from "@iconify/react";
const Order = ({ order, index }) => {
  return (
    <div key={index} className={style.cartBox}>
      <div className={style.side}>
        <div className={style.pic}>
          <h2>{index * 1 + 1}</h2>
        </div>
        <span className={style.status}>{order.status}</span>
        <span className={style.price}>{order.total + " DT"}</span>
      </div>
    </div>
  );
};

export default Order;

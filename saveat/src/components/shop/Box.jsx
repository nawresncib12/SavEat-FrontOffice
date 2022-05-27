import React from 'react'
import { Button } from '../../UI/Button';
import classes from './Box.module.css';
import avatar1 from '../../assets/avatar1.svg';
import { useState } from 'react';
const Box = ({category,subcategory,price,stock,items}) => {
  
  const [addedBox,setAddedBox] = useState(false);
  const [amount,setAmount]=useState(1);
  const handleClick= () => {
    setAddedBox(true)
    setAmount(1)
  }
  const handleplus = () => {
      setAmount(amount+1);
  }
  const handleminus = () => {
      if(amount >0)
        setAmount(amount-1);
  }
    return (
    <div className={classes.box}>
        <h2 className={classes.title}>
            {subcategory+" "+category+" goods"} 
        </h2>
        <img src={avatar1} alt="" />
        <h4 className={classes.note}>May Contain :</h4>
        <p className={classes.items}>
            {
                items.map((item) => {
                    return item.name+" ";
                })
            }
        </p>
        <h4 className={classes.price}>{price+" "}DT</h4>
        {
            stock === "true" ? 
            <div>
               { !addedBox || amount===0 ?
               <Button color="#4DAAAA" content={"Add To Cart" } onClick={handleClick}/> :
               <div className={classes.amount}>
                   
                   <Button color="#4DAAAA" content={" - "} onClick={handleminus}/>
                   <p>{amount}</p>
                   <Button color="#4DAAAA" content={" + "} onClick={handleplus} />
               </div>
               }
            </div> : 
            <h5 className={classes.error}>Out Of Stock !</h5>
        }

    </div>
  )
}
export default Box;

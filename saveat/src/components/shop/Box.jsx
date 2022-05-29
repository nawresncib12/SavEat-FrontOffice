import React from 'react'
import { Button } from '../../UI/Button';
import classes from './Box.module.css';
import avatar1 from '../../assets/avatar1.svg';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/actions';

const Box = ({category,subcategory,price,stock,items,addToCart}) => {

  const [addedBox,setAddedBox] = useState(false);
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
              
               <Button  color="#4DAAAA" content={"Add To Cart" }  onClick={()=>{  console.log(category,subcategory,price,stock,items);
               if(stock) addToCart({category,subcategory,price,items})
            }}/> :
               
               
            </div> : 
            <h5 className={classes.error}>Out Of Stock !</h5>
        }

    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addToCart : (productInfo)=> dispatch(addToCart(productInfo))
    }
  }

export default connect(null,mapDispatchToProps) (Box);


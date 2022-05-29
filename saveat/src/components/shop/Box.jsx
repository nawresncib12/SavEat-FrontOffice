import React from 'react'
import { Button } from '../../UI/Button';
import classes from './Box.module.css';
import avatar1 from '../../assets/avatar1.svg';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/actions';

const Box = ({id,category,subcategory,price,stock,items,addToCart,amount}) => {
    console.log("stock",stock)

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
            stock > 0 ? 
            <div>
              
               <Button  color="#4DAAAA" content={"Add To Cart" }  onClick={()=>{ let quantity=1; console.log(category,subcategory,price,stock,items,id);
               if(stock) addToCart({category,subcategory,price,items,id,quantity})
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
  const mapStateToProps=(state)=>{
    return {
        amount: state.cartReducer
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) (Box);


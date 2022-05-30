import React,{useState} from 'react'
import { Button } from '../../UI/Button';
import classes from './Box.module.css';
import avatar1 from '../../assets/avatar1.svg';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/actions';
import { increment_quantity } from '../redux/actions/actions';
import { removeFromCart } from '../redux/actions/actions';
import style from "../profile/CartLine.module.css";
import { Icon } from '@iconify/react';

const Box = ({mode,id,category,subcategory,price,stock,items,addToCart,increment_quantity,removeFromCart}) => {

    const [quantity, setQuantity] = useState(0)
    const handlePlus=()=>{
        setQuantity(quantity+1)
        increment_quantity(id,1)
    }
    const handleMinus=()=>{
        if(quantity>1){

            setQuantity(quantity-1)
            increment_quantity(id,-1)

        }
        if(quantity==1){
            removeFromCart(id)
            setQuantity(quantity-1)

        }
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
            mode!== "slider" && (stock > 0 ? 
            <div>

             {(quantity==0)?

                 <Button shake={true} color="#4DAAAA" content={"Add To Cart" }  onClick={()=>{ 
                     setTimeout(() => {
                         setQuantity(quantity+1)
                         increment_quantity(id,1)

                     }, 600);
                     addToCart({category,subcategory,price,items,id,quantity})
                    }}/> 
                    :






    <div className={style.options} style={{display:"flex" , fontFamily:"19px"}}>
    <Icon icon="akar-icons:circle-minus" color="#4DAAAA" width="25px" height="25px" style={{cursor:"pointer"}}
     onClick={handleMinus} 
     />
    <span className={style.unselectable}  style={{margin : "0 15px 0px 15px ",width:"minContent"}}>{quantity}</span>
    <Icon icon="akar-icons:circle-plus" color="#4DAAAA" width="25px" height="25px" style={{cursor:"pointer"}} 
    onClick={handlePlus}
     />

    
  </div>




          
            } 
               
               
            </div> : 
            <h5 className={classes.error}>Out Of Stock !</h5>)
        }

    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        increment_quantity : (id,step)=> dispatch(increment_quantity(id,step)),
        addToCart : (productInfo)=> dispatch(addToCart(productInfo)),
        removeFromCart : (id)=> dispatch(removeFromCart(id)),

    }
  }
  const mapStateToProps=(state)=>{
    return {
        amount: state.cartReducer
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) (Box);


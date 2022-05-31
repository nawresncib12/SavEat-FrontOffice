import React,{useEffect,useState} from 'react'
import style from './Deals.module.css'
import { getMydeals } from "../../api/api.deal";

const Deals = () => {

  const [deals, setdeals] = useState([])

  const getAll = async()=>{
    const res = await getMydeals()
    if(!deals.length) setdeals(res.data.deals)
  }

  useEffect(() => {
    getAll()
  }, [deals]);

  return (
    <div className={style.container}>
        <div className={style.title}><h1>DEALS</h1> </div>
        <div className={style.meriem}>

          <div className={style.dealHeader}>
            <h2>Deal ID</h2>
            <h2>Restaurant</h2>
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Status</h2>
          </div>
        {(deals.length)&& deals.map((dealItem,index) => {
          return (
            
            <div key={dealItem._id}>
              <div key={index} className={style.dealHeader}>
              
              
              
              
              <h4>{index}</h4>
             { (dealItem.offer)&&
             <>
             <h4>{dealItem.offer.restaurant}</h4>
               <h4>{dealItem.offer.product}</h4>
              <h4>{dealItem.offer.new_price+" DT"}</h4> 
             </>
              }
              <h4>{dealItem.status}</h4>
             
           
           
              </div>
              {index!== deals.length-1 && <hr />}
            </div>
            
            
          );
        })}
        </div>
    </div>
  )
}

export default Deals
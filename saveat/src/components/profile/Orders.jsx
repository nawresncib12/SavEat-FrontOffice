import React,{useState,useEffect} from 'react'
import style from './Orders.module.css'
import order from '../../common/data/order.json';
import OrderLine from './OrderLine'
import { getMyOrders } from '../../api/api.order';
const Orders = () => {
  const [orders, setorders] = useState([])
  
  const getAll = async()=>{
    const orders = await getMyOrders()
    if(!orders.length) setorders(orders.data.myOrders)
  }

  useEffect(() => {
    getAll()
  
  }, []);
  return (
    <div className={style.container}>
        <div className={style.title}><h1>ORDERS</h1> </div>
        <div className={style.meriem}>
        <div className={style.dealHeader}>
            <h2>Order ID</h2>
            <h2>Status</h2>
            <h2>Total</h2>
          </div>
        {orders.map((orderItem,index) => {
          return (
            
            <div>
              <div key={orderItem._id}>
                <OrderLine order={orderItem} index={index} />
                
                
              </div>
              {
                 index!== order.length-1 &&
                 <hr />
              }
            </div>
            
            
          );
        })}

        </div>
    </div>
  )
}

export default Orders
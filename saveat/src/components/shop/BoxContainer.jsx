import React from 'react'
import classes from './BoxContainer.module.css';
import Box from './Box';
import box from '../../common/data/box.json';
export const BoxContainer = () => {
  return (
    <div className={classes.boxContainer}>
        {
            box.map((box)=>{
                return (
                    <div id={box.id} className={classes.boxItem}>
                        <Box category={box.category} subcategory={box.subcategory} stock={box.stock} items={box.items} price={box.price} />
                    </div>
                )
            })
        }
        

    </div>
  )
    }

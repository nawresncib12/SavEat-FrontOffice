import React,{useState} from "react";
import classes from "./BoxContainer.module.css";
import Box from "./Box";
// import box from "../../common/data/box.json";
import { useEffect, useRef } from "react";
import { getAllBoxes } from "../../api/api.box";
import HomeTitle from "../../UI/HomeTitle";
export const BoxContainer = ({ setShop, shop }) => {
  const [box, setbox] = useState ([])
  const boxContainer = useRef(null);
  const executeScroll = () =>
    boxContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

   const getAll = async()=>{
    const box = await getAllBoxes()
    if(!box.length) setbox(box.data.boxes)
  }

  useEffect(() => {
    getAll()
      if (shop) {
      executeScroll();
      setShop(false);
    }
  }, [shop, setShop]);

return (
  <div className={classes.boxWrapper}>
    <div className={classes.title}>
      <HomeTitle>Our Box Collection</HomeTitle>
    </div>
    
    <div ref={boxContainer} className={classes.boxContainer}>
      
      {box.map((box) => {
        return (
          <div key={box._id} id={box._id} className={classes.boxItem} >
            <Box 
              category={box.category}
              subcategory={box.subCategory}
              stock={box.stock}
              items={box.items}
              price={box.price}
              id={box._id}
              shake={true}
            />
          </div>
        );
      })}
    </div>
  </div>
    
  );
};

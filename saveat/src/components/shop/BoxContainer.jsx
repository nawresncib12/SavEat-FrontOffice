import React from "react";
import classes from "./BoxContainer.module.css";
import Box from "./Box";
import box from "../../common/data/box.json";
import { useEffect, useRef } from "react";
export const BoxContainer = ({ setShop, shop }) => {
  const boxContainer = useRef(null);
  const executeScroll = () =>
    boxContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  useEffect(() => {
    if (shop) {
      executeScroll();
      setShop(false);
    }
  }, [shop, setShop]);
  return (
    <div ref={boxContainer} className={classes.boxContainer}>
      {box.map((box) => {
        return (
          <div id={box.id} className={classes.boxItem}>
            <Box
              category={box.category}
              subcategory={box.subcategory}
              stock={box.stock}
              items={box.items}
              price={box.price}
              id={box.id}
            />
          </div>
        );
      })}
    </div>
  );
};

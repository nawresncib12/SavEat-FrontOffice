import React, { useState } from "react";
import classes from "./BoxContainer.module.css";
import Box from "./Box";
// import box from "../../common/data/box.json";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBoxes } from "../../api/api.box";
import HomeTitle from "../../UI/HomeTitle";
import Button from "../../UI/Button";
export const BoxContainer = ({ setShop, shop }) => {
  const navigate = useNavigate();
  const [box, setbox] = useState([]);
  const boxContainer = useRef(null);
  const executeScroll = () =>
    boxContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  const getAll = async () => {
    const box = await getAllBoxes();
    if (!box.length) setbox(box.data.boxes);
  };

  useEffect(() => {
    getAll();
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
            <div key={box._id} id={box._id} className={classes.boxItem}>
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
        <div className={classes.bttn}>
          <Button
            color="#4daaaa"
            onClick={() => {
              navigate("/profile", { state: { activeSlide: 3 } });
            }}
          >
            Go to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

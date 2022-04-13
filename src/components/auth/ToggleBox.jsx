import React from "react";
import classes from "./ToggleBox.module.css";
import { Icon } from "@iconify/react";
import { Circle } from "./Circle";


export const ToggleBox = ({ note, isClicked, handleClick }) => {
  return (
    <div  onClick={handleClick} className={classes.toggleSection}>
      <h5>{note}</h5>
      <div className={classes.toggleBox}>
        <div
          onClick={handleClick}
          className={`${classes.circle} ${
            isClicked ? classes.animate : classes.exit
          }`}
        >
          <Circle />
        </div>

        <div
          className={`${classes.icon} ${
            isClicked ? classes.animate : classes.exit
          }`}
        >
          <Icon
            icon={`${
              isClicked
                ? "ant-design:plus-circle-outlined"
                : "teenyicons:signin-outline"
            }`}
            color="white"
            
            width="24px"
            height="24px"
          />
        </div>
      </div>
    </div>
  );
};


import React from "react";
import { TextField } from "./TextField";
import { Button } from "../../UI/Button";
import classes from "./StepOne.module.css";
import next from "../../assets/next.png";
export const StepOne = (props) => {
  return (
    <div className={classes.stepOne}>
      <div>
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password" />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <div className={classes.submit}>
          <div className={classes.nextBtn}>
            <button type="submit" >
              <img src={next} className={classes.nextImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

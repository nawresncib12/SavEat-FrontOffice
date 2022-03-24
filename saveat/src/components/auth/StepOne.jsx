import React from "react";
import { TextField } from "./TextField";
import { Button } from "../../UI/Button";
import classes from "./StepOne.module.css";
import next from "../../assets/next.png";
import { SocialMediaBox } from "./SocialMediaBox";
export const StepOne = (props) => {
  return (
    <div className={classes.stepOne}>
      <div>
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password" />
        <p className={classes.noteP1}>Must be longer than 8 characters and contain </p>
        <p className={classes.noteP2}>one capital letter.</p>
        <TextField
          label="Confirm Password"
          name="confirmpassword"
          type="password"
        />
        <div className={classes.submit}>
          <div className={classes.nextBtn}>
            <button type="submit"  >
              <img src={next} className={classes.nextImg} alt="" />
              
            </button>
          </div>
          <SocialMediaBox />
        </div>
      </div>
    </div>
  );
};

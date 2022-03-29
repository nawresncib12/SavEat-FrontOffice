import React from "react";
import { TextField } from "./TextField";
import classes from "./StepOne.module.css";
import next from "../../assets/next.png";
export const StepOne = (props) => {
  return (
    <div className={classes.stepOne}>
      <div>
        <TextField label="Email" name="email" type="email"  form="signup" />
        <TextField label="Password" name="password" type="password"  form="signup"/>
        <p className={classes.noteP1}>Must be longer than 8 characters and contain </p>
        <p className={classes.noteP2}>one capital letter.</p>
        <TextField
          label="Confirm Password"
          name="confirmpassword"
          type="password"
          form="signup"
          failed={props.failed}
        />
        <div className={classes.submit}>
          <div className={classes.nextBtn}>
            <button type="submit"  >
              <img src={next} className={classes.nextImg} alt="" />
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { TextField } from "./TextField";
import classes from "./StepOne.module.css";
import next from "../../assets/next.png";
import ButtonLoader from "../../UI/ButtonLoader";
export const StepOne = (props) => {
  const loading=props.loading;
  return (
    <div className={classes.stepOne}>
      <div>
        <TextField label="Email" name="email" type="email" form="signup" />
        <TextField
          label="Password"
          name="password"
          type="password"
          form="signup"
        />
        <p className={classes.noteP1}>
          Must be longer than 8 characters and contain{" "}
        </p>
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
            {!loading && <button type="submit">
              <img src={next} className={classes.nextImg} alt="" />
            </button>}

            {loading &&
            <ButtonLoader/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

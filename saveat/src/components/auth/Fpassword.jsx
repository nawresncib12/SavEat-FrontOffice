import classes from "./Fpassword.module.css";
import { TextField } from "./TextField";
import { Button } from "../../UI/Button";
const Fpassword = (props) => {
  return (
    <div>
      <div className={classes.Fpassword}>
        <div>
          <TextField
            label="Email"
            name="email"
            type="email"
            form="signup"
            failed={props.failed}
          />
          <p className={classes.note}>
            Please enter your email and we will help you recover your account
          </p>

          <div className={classes.submit}>
            <Button color="#4DAAAA" content="Submit" type="submit" />
          </div>
          <p className={classes.noteBack} onClick={props.hideFpass}>
            Go back to log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fpassword;

import classes from "./Background.module.css";
import { SignInForm } from "./SignInForm";
const Background = () => {
  return <div className={classes.authBackground}>
      <div className={classes.authHead}>
          <img src="assets/logo.png" alt="" />
      </div>
      <SignInForm />
  </div>;
};

export default Background;

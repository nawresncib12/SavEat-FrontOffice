import classes from "./Background.module.css";
import FormSection from "./FormSection";
import WelcomeSection from "./WelcomeSection";
import { SignInForm } from "./SignInForm";
const Background = () => {
  return (
    <div className={classes.authBackground}>
      <div className={classes.authHead}>
        <img src="assets/logo.png" alt="" />
      </div>



      <div className={classes.authBody}>
        <WelcomeSection></WelcomeSection>
        <FormSection>
            <SignInForm />
        </FormSection>
      </div>
    </div>
  );

};

export default Background;

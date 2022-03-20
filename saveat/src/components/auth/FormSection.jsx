import classes from "./FormSection.module.css";
import { SignInForm } from "./SignInForm";
const FormSection = (props) => {
  return (
    <div className={classes.formSection}>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
        
      </div>
      <SignInForm />
    </div>

  );
}

export default FormSection;

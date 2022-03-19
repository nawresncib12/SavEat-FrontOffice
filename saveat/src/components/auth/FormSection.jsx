import classes from "./FormSection.module.css";
<<<<<<< HEAD
const FormSection = (props) => {
  return (
    <div className={classes.formSection}>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
      </div>
=======
import { SignInForm } from "./SignInForm";
const FormSection = () => {
  return (
    <div className={classes.formSection}>
      <SignInForm />
>>>>>>> 72a26275cd6d645db263af77cd8af77039f01eee
    </div>
  );
};

export default FormSection;

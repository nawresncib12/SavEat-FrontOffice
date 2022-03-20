import classes from "./FormSection.module.css";
import { SignInForm } from "./SignInForm";
const FormSection = (props) => {
  return (
    <div className={classes.formSection}>
      {/* <motion.div className={classes.smallWave}>
        <img src="assets/Vector.png" alt="whitewave" />
      </motion.div>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
      </div>*/}
      <div className={classes.waves}>
        <img src="assets/waves.png" alt="waves" />
      </div>
      <div className={classes.formContainer}>

      <SignInForm onSubmitForm={props.onSubmitForm} />
      </div>
    </div>
  );
};

export default FormSection;

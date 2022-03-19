import classes from "./FormSection.module.css";
import { SignInForm } from "./SignInForm";
const FormSection = () => {
  return (
    <div className={classes.formSection}>
      <SignInForm />
    </div>
  );
};

export default FormSection;

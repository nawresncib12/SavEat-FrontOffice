import classes from "./FormSection.module.css";
const FormSection = (props) => {
  return (
    <div className={classes.formSection}>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
      </div>
    </div>
  );
};

export default FormSection;

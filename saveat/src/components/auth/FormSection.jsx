import classes from "./FormSection.module.css";
import { SignInForm } from "./SignInForm";
import { motion, AnimatePresence } from "framer-motion";
const FormSection = (props) => {
  const mVariants = {
    hidden: {
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    visible: {
      x: "-80vw",
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    exit: {
      x: "80vw",
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };
  return (
    <div className={classes.formSection}>
      <AnimatePresence>
        {!props.submitted && (
          <motion.div
            className={classes.smallWave}
            variants={mVariants}
            initial="hidden"
            exit="exit"
            animate={props.showForm ? "visible" : ""}
          >
            <img src="assets/Vector.png" alt="whitewave" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
      </div>

      <SignInForm onSubmitForm={props.onSubmitForm} />
    </div>
  );
};

export default FormSection;

import classes from "./WelcomeSection.module.css";
import { motion } from "framer-motion";
const WelcomeSection = (props) => {
  let delay;
  if (props.showForm === true) {
    delay = 0;
  } else {
    delay = 2;
  }
  const imageVariants = {
    hidden: {
      y: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    visible: {
      y: ["-10px", "10px", "-10px", "10px", "-10px", "0px"],
      transition: {
        delay: delay,
        type: "tween",
        duration: 1,
      },
    },
  };
  return (
    <div className={classes.welcomeSection}>
      {
        <div
          className={`${props.showForm&&!props.submitted ? classes.hidden :  classes.shown} ${
            classes.content
          }`}
        >
          <motion.img
            variants={imageVariants}
            animate={props.submitted ? "visible" : ""}
            src="assets/welcomePic.png"
            alt="food"
          />
          <motion.h3>Save it while saving on it</motion.h3>
          <div className={classes.line}></div>
          <motion.p>the number one anti food waste app in Tunisia</motion.p>
          {!props.submitted && (
            <button onClick={props.onShow}>Get started</button>
          )}
        </div>
      }
    </div>
  );
};

export default WelcomeSection;

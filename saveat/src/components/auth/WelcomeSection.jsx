import classes from "./WelcomeSection.module.css";
import { motion } from "framer-motion";
const WelcomeSection = (props) => {
  const mVariants = {
    hidden: {
      x: 0,
    },
    visible: {
      x:"-83vw",
      transition: {
        type: "spring",
        bounce: 0.25,
        stiffness: 100,
      },
    },
  };
  return (
    <div className={classes.welcomeSection}>
      <div className={classes.smallWave}>
        <motion.img
          variants={mVariants}
          initial="hidden"
          animate={props.showForm ?"visible":""}
          src="assets/Vector.png"
          alt="whitewave"
        />
      </div>
      <div className={classes.content}>
        <img src="assets/welcomePic.png" alt="food" />
        <h3>Save it while saving on it</h3>
        <div className={classes.line}></div>
        <p>the number one anti food waste app in Tunisia</p>
        <button onClick={props.onShow}>Get started</button>
      </div>
    </div>
  );
};

export default WelcomeSection;

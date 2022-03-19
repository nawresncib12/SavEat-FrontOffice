import { useState } from "react";
import classes from "./Background.module.css";
import FormSection from "./FormSection";
import WelcomeSection from "./WelcomeSection";
import { motion } from "framer-motion";
const Background = () => {
  const mobileVariants = {
    hidden: {
      x: 0,
    },
    visible: {
      x: "-85vw",
      transition: {
        type: "spring",
        bounce: 0.25,
        stiffness: 100,
      },
    },
  };
  const [showForm, setshowForm] = useState(false);
  const onShow = () => {
    setshowForm(true);
  };
  const handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1000) {
      setshowForm(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return (
    <div className={classes.authBackground}>
      <div className={classes.authHead}>
        <img src="assets/logo.png" alt="" />
      </div>
      <div className={classes.authBody}>
        <WelcomeSection showForm={showForm} onShow={onShow}></WelcomeSection>
        <motion.div
          variants={mobileVariants}
          initial="hidden"
          animate={showForm ? "visible" : ""}
          className={classes.formWhite}
        >
          <FormSection></FormSection>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;

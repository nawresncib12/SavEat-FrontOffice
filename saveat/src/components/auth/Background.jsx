import { useState } from "react";
import classes from "./Background.module.css";
import FormSection from "./FormSection";
import WelcomeSection from "./WelcomeSection";
import { motion, AnimatePresence } from "framer-motion";
const Background = () => {
  const mobileVariants = {
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
  let submitVariants = {
    hidden: {
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    visible: {
      x: "25vw",
      originY: "50vh",
      originX: "25vw",
      transition: {
        type: "tween",
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 2,
      },
    },
  };
  let submitSecondVariants = {
    hidden: {
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    visible: {
      originY: "50vh",
      originX: "25vw",
      scale: 1.3,
      transition: {
        delay: 1,
        type: "tween",
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 2,
      },
    },
  };
  const [showForm, setshowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const onShow = () => {
    setshowForm(true);
  };
  const onSubmitForm = () => {
    setSubmitted(true);
  };
  const handleResize = () => {
    if (window.innerWidth > 1000) {
      setshowForm(false);
    } else {
      if(submitted)
      setshowForm(true);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <div className={classes.authBackground}>
      <div className={classes.authHead}>
        <img src="assets/logo.png" alt="" />
      </div>

      <motion.div
        variants={submitVariants}
        animate={submitted && !showForm ? "visible" : ""}
        className={classes.authBody}
      >
        <motion.div
          variants={submitSecondVariants}
          animate={submitted && !showForm ? "visible" : ""}
        >
          <WelcomeSection
            submitted={submitted}
            showForm={showForm}
            onShow={onShow}
          ></WelcomeSection>
        </motion.div>
        <AnimatePresence>
          {!submitted && (
            <motion.div
              variants={mobileVariants}
              initial="hidden"
              animate={showForm ? "visible" : ""}
              exit="exit"
              className={classes.formWhite}
            >
              <FormSection
                onSubmitForm={onSubmitForm}
                submitted={submitted}
              ></FormSection>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Background;

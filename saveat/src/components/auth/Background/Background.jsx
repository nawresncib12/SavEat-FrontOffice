import { useState } from "react";
import classes from "./Background.module.css";
import FormSection from "./FormSection";
import WelcomeSection from "./WelcomeSection";
import logo from '../../../assets/logo.png'
const Background = () => {

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
      if (submitted) setshowForm(true);
    }
  };
  window.addEventListener("resize", handleResize);

  let formWhiteClass = ["", ""];
  if (showForm) {
    formWhiteClass[0] = classes.animate;
  } else {
    formWhiteClass[0] = classes.hidden;
  }
  if (submitted) {
    formWhiteClass[1] = classes.exit;
  } else {
    formWhiteClass[1] = "";
  }
  return (
    <div className={classes.authBackground}>
      <div className={classes.authHead}>
        <img src={logo} alt="logo" />
      </div>

      <div
        className={`${
          submitted && !showForm ? classes.animate : classes.hidden
        } ${classes.authBody} `}
      >
        <div
          className={`${
            submitted && !showForm ? classes.animate : classes.hidden
          } ${classes.welcomeDiv} `}
        >
          <WelcomeSection
            submitted={submitted}
            showForm={showForm}
            onShow={onShow}
          ></WelcomeSection>
        </div>

        <div
          className={`${formWhiteClass[0]} ${formWhiteClass[1]} ${classes.formWhite} `}
        >
          <FormSection
            onSubmitForm={onSubmitForm}
            submitted={submitted}
          ></FormSection>
        </div>
      </div>
    </div>
  );
};

export default Background;

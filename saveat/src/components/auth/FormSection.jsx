import classes from "./FormSection.module.css";
import { SignInForm } from "./SignInForm";
import { ToggleBox } from "./ToggleBox";
import { useState } from "react";
import {SignUpForm} from './SignUpForm';
const FormSection = (props) => {

    const text = ["Are You New Here ? Join Us","Already A Member ? Sign In !"]
    const [isClicked,setIsClicked] = useState(false);
    const [note,setNote] = useState(text[0]);
    const [form,setForm] = useState("SignInForm");

    const handleClick = () => {
        setIsClicked(!isClicked);
        note === text[0] ? setNote(text[1]) : setNote(text[0]);
        form === "SignInForm" ? setForm("SignUpForm") : setForm("SignInForm");
    }
    
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
          { form === "SignInForm" ? <SignInForm onSubmitForm={props.onSubmitForm} /> : <SignUpForm />}
          
          <ToggleBox note={note} isClicked={isClicked} handleClick={handleClick} />

      
      </div>

    </div>
  );
};

export default FormSection;

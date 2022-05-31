import classes from "./Features.module.css";
import sideImage from "../../assets/hayer2.png";
import { useState,useEffect,useRef } from "react";
const Features = ({setScroll,scroll}) => {
  const steps = [
    "A box includes fresh or canned goods at a bargain price ! ",
    "You get to choose one of of three categories: canned goods , fresh goods or a mix of both with each category including a regular box or a special box.",
    "A description of what you may find in the box is provided with each category.",
  ];
  const [step, setStep] = useState(0);
  var percent = parseFloat((100 / steps.length) * (step + 1)).toFixed(2) + "%";
  const stepCounter = () => {
    if (step == steps.length - 1) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };
  
  const features = useRef(null);
  const executeScroll = () =>
    features.current.scrollIntoView({ behavior: "smooth", block: "center" });
    useEffect(() => {
      if (scroll) {
        executeScroll();
        setScroll(false);
      }
    }, [scroll, setScroll]);
  return (
    <div className={classes.features} ref={features}>
      <div className={classes.sideImage}>
        <img src={sideImage} alt="how" />
      </div>
      <div className={classes.slider}>
        <h1>
          How it works ?
        </h1>
        <div className={classes.line}>
          <div className={classes.whiteline}></div>
          <div className={classes.greenLine} style={{ width: percent }}></div>
   
        </div>
        <div className={classes.slide}>
          <p>{steps[step]}</p>
          <h1 className={classes.next} onClick={stepCounter}>></h1>
        </div>
      </div>
      <div className={classes.phoneSideImage}>
        <img src={sideImage} alt="how" />
      </div>
    </div>
  );
};

export default Features;

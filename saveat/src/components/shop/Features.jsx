import classes from "./Features.module.css";
import sideImage from "../../assets/hayer2.png";
import { useState } from "react";
const Features = () => {
  const steps = [
    "Like a scene in a movie or a verse in a song.Lorem ipsum dolor Lorem ipsum it, sed do eiusmod tempor. ",
    "Paragraphs are the building blocks of any good .Lorem ipsum dolor Lorem ipsum it, sed do eiusmod tempor.",
    "Piece of writing. Paragraphs lend a natural rhythm to your writing that makes it a joy to read. The question is, Lorem ipsum it, sed do eiusmod tempor.",
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
  return (
    <div className={classes.features}>
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

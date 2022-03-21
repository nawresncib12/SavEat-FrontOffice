import classes from "./WelcomeSection.module.css";
import food from '../../assets/welcomePic.png'
const WelcomeSection = (props) => {
  let animate;
  if (props.showForm === true) {
    animate = classes.animate1;
  } else {
    animate=classes.animate2;
  }
  return (
    <div className={classes.welcomeSection}>
      {
        <div
          className={`${
            props.showForm && !props.submitted ? classes.hidden : classes.shown
          } ${classes.content}`}
        >
          <img
            className={`${
              props.submitted ? animate : classes.hide
            }`}
            src={food}
            alt="food"
          />
          <h1>Save it while saving on it</h1>
          <div className={classes.line}></div>
          <p>the number one anti food waste app in Tunisia</p>
          {!props.submitted && (
            <button onClick={props.onShow}>Get started</button>
          )}
        </div>
      }
    </div>
  );
};

export default WelcomeSection;

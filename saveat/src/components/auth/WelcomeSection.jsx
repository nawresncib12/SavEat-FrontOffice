import classes from "./WelcomeSection.module.css";
const WelcomeSection = () => {
  return (
    <div className={classes.welcomeSection}>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
      </div>
      <div className={classes.smallWave}>
        <img src="assets/Vector.png" alt="whitewave" />
      </div>
      <div className={classes.content}>
        <img src="assets/welcomePic.png" alt="food" />
        <h3>Save it while saving on it</h3>
        <div className={classes.line}></div>
        <p>the number one anti food waste app in Tunisia</p>
      </div>
    </div>
  );
};

export default WelcomeSection;

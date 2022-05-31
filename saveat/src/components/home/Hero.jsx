import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import home from "../../assets/home.png";
const Hero = () => {
  return (
    <div className={classes.homeHero}>
      <div className={classes.info}>
        <h3>Get lower prices,</h3>
        <h1>start saving</h1>
        <h3>On the saved goods.</h3>
        <p>Save it while saving on it ..</p>
        <p>Eating cheaper while saving the planet.</p>
        <div className={classes.button}>
          <Button color="#4DAAAA">Learn more about it</Button>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.image}>
          <img src={home} alt="home" />
          <div className={classes.stats}>
            <div className={classes.stat}>
              <h3>1524</h3>
              <p>TNDs saved by users from their food expences.</p>
            </div>
            <div className={classes.stat}>
              <h3>185</h3>
              <p>Meals rescued from the food waste cycle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

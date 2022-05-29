import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import earth from "../../assets/earth.png";
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

      <div className={classes.earth}>
      </div>
    </div>
  );
};

export default Hero;

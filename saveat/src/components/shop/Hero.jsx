import classes from "./Hero.module.css";
import Button from "../../UI/Button";
const Hero = () => {
  return (
    <div className={classes.shopHero}>
      <div className={classes.leftHero}>
        <h1></h1>
        <p></p>
        <Button></Button>
        <Button></Button>
      </div>
      <div className={classes.rightHero}></div>
    </div>
  );
};

export default Hero;

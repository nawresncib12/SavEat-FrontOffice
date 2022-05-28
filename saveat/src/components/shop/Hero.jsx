import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import HeroImage from "./HeroImage";
import herowave from "../../assets/herowave.png";
const Hero = (props) => {
  return (
    <div className={classes.shopHero}>
      <img className={classes.wave} src={herowave} alt="waves" />
      <div className={classes.leftHero}>
        <h1>
          Buy a <span className={classes.highlighted}>Box ,</span>
        </h1>
        <h1>Save it and save on it.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          <Button
            onClick={() => {
              props.setShop(true);
            }}
            type="submit"
            color="#4DAAAA"
            border="#4DAAAA 1px solid"
          >
            Start shopping
          </Button>
          <Button
            type="submit"
            contentColor="#4DAAAA"
            color="white"
            border="#4DAAAA 1px solid"
            onClick={() => {
              props.setScroll(true);
            }}
          >
            Lear about it
          </Button>
        </div>
      </div>
      <div className={classes.rightHero}>
        <HeroImage></HeroImage>
      </div>
    </div>
  );
};

export default Hero;

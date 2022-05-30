import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import herowave from "../../assets/herowave.png";
import img from '../../assets/dealHero.png'
const Hero = (props) => {
  return (
    <div className={classes.shopHero}>
   
      <div className={classes.leftHero}>
          <div>
            <h1>
            Take an <span className={classes.highlighted}>Offer ,</span>
            </h1>
            <h1>Save it and save on it.</h1>
            <p>
                At closing hours , our partner restaurants offer special discounts.
            </p>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Button
            onClick={() => {
              props.setShop(true);
            }}
            type="submit"
            color="#4DAAAA"
            border="#4DAAAA 1px solid"
          >
            See Our Offers
          </Button>
          
        </div>
      </div>
      <div className={classes.rightHero}>
        <div>
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
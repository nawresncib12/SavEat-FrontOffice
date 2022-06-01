import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import herowave from "../../assets/herowave.png";
import img from '../../assets/dealHero.png'
const Hero = (props) => {
  return (
    <div className={classes.shopHero}>
   
      <div className={classes.leftHero} >
          <div>
            <h1>
            Take an <span className={classes.highlighted}>Offer ,</span>
            </h1>
            <div className={classes.coolSave}>
              <div className={classes.save}>Save it</div>
              <div className={classes.saveRest}>
                <span>and save on it</span>
              </div>
            </div>
            <p>
             Find deals from restaurants and bakeries near you and buy their offered items at much lower price.
            </p>
        </div>
        <div className={classes.bttn}>
          <Button
            onClick={() => {
              props.setScroll(true);
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
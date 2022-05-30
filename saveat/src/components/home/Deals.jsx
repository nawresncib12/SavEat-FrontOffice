import classes from "./Deals.module.css";
import Button from "../../UI/Button";
import herowave from "../../assets/herowave.png";
import img from '../../assets/deals.png'
import HomeTitle from "../../UI/HomeTitle";
const Deals = () => {
  return (
      <div className={classes.deals}>
         <div className={classes.title}>
            <HomeTitle>Get A Deal</HomeTitle>
         </div>
         <div className={classes.shopHero}>
     {/* <img className={classes.wave} src={herowave} alt="waves" />*/}
    
      <div className={classes.leftHero}>
        <h1>
          Take An <span className={classes.highlighted}>Offer ,</span>
        </h1>
        <h1>Save it and save on it.</h1>
        <p>
            At closing hours , our partner restaurants offer special discounts.
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          <Button
            color="#4DAAAA"
            border="#4DAAAA 1px solid"
          >
            Discover Our Offers
          </Button>
        </div>
      </div>
      <div className={classes.rightHero}>
        <div className={classes.heroImage}>
            <img src={img} alt="" />
        </div>
      </div>
            </div>
         </div>
  
  );
};

export default Deals;
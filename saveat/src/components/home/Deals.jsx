import classes from "./Deals.module.css";
import Button from "../../UI/Button";
import { useNavigate } from 'react-router-dom';
import img from '../../assets/deals.png'
import HomeTitle from "../../UI/HomeTitle";
const Deals = () => {
    const navigate = useNavigate();
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
            onClick={()=> navigate('/offers')}
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
import classes from "./Deals.module.css";
import Button from "../../UI/Button";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/discount.png";
import HomeTitle from "../../UI/HomeTitle";
import Heart from "../../UI/Heart";
const Deals = () => {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };
  const options = {};
  const myObserver = new IntersectionObserver(callback, options);
  useEffect(() => {
    myObserver.observe(domRef.current);
  }, []);
  return (
    <div className={classes.deals}>
      <div
        ref={domRef}
        className={`${classes.title} ${classes.anim}  ${
          isVisible ? classes.animate : ""
        }`}
      >
        <HomeTitle>Get A Deal</HomeTitle>
      </div>
      <div className={classes.shopHero}>
        <div className={classes.leftHero} >
          <h1
            className={` ${classes.anim}  ${isVisible ? classes.animate : ""}`}
          >
            Take An <span className={classes.highlighted}>Offer ,</span>
          </h1>
          <h1
            className={` ${classes.anim}  ${isVisible ? classes.animate : ""}`}
          >
            Save it and save on it.
          </h1>
          <p>
            At closing hours , our partner restaurants offer special discounts.
          </p>
          <div
            className={` ${classes.bttn} ${
              isVisible ? classes.animate : ""
            }`}
          >
            <Button
              color="#4DAAAA"
              border="#4DAAAA 1px solid"
              onClick={() => navigate("/offers")}
            >
              Discover Our Offers
            </Button>
          </div>
        </div>
        <div className={classes.rightHero}>
          <div className={classes.heroImage}>
          <Heart></Heart>
            <img src={img} alt="" />
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Deals;

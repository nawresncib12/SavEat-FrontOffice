import classes from "./Box.module.css";
import HomeTitle from "../../UI/HomeTitle";
import box from "../../assets/heroShop.png";
import Button from "../../UI/Button";
import { BoxSlider } from "./BoxSlider";
import { useRef, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const Box = ({ scroll, setScroll }) => {
  const navigate = useNavigate();
  const slider = useRef(null);
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
  const executeScroll = () =>
    slider.current.scrollIntoView({ behavior: "smooth", block: "center" });
  useEffect(() => {
    if (scroll) {
      executeScroll();
      setScroll(false);
    }
  }, [scroll, setScroll]);
  return (
    <div className={classes.boxesHome} ref={slider}>
      <div ref={domRef} className={`${classes.title} ${classes.anim}  ${isVisible ? classes.animate : ""}`}>
        <HomeTitle>Get A Box</HomeTitle>
      </div>
      <div className={classes.boxes}>
        <div className={classes.slider}>
          <BoxSlider />
        </div>
        <div className={classes.welcome}>
          <img src={box} alt="box" />
          <div className={classes.button}>
            <Button color="#FFBCBC" onClick={() => navigate("/shop")}>
              See shop
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,0L48,21.3C96,43,192,85,288,85.3C384,85,480,43,576,48C672,53,768,107,864,122.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Box;

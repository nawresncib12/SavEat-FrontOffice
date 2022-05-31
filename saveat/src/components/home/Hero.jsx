import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import home from "../../assets/home.png";
import { useRef,useEffect,useState } from "react";
const Hero = ({ setScroll }) => {
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
    <div className={classes.homeHero}>
      <div className={`${classes.info}  ${isVisible ? classes.animate : ""}`} ref={domRef} >
        <h3>Get lower prices,</h3>
        <h1>start saving</h1>
        <h3>On the saved goods.</h3>
        <p>Save it while saving on it ..</p>
        <p>Eating cheaper while saving the planet.</p>
        <div className={classes.button}>
          <Button
            color="#4DAAAA"
            onClick={() => {
              setScroll(true);
            }}
          >
            Learn more about it
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.image}>
          <img src={home} alt="home" />
          <div className={classes.stats}>
            <div className={`${classes.stat}  ${isVisible ? classes.animate : ""}`} >
              <h3>1524</h3>
              <p className={` ${isVisible ? classes.animate : ""}`}>TNDs saved by users from</p>
              <p className={` ${isVisible ? classes.animate : ""}`}> their food expenses.</p>
            </div>
            <div className={`${classes.stat}  ${isVisible ? classes.animate : ""}`} >
              <h3>185</h3>
              <p className={` ${isVisible ? classes.animate : ""}`}>Meals rescued from the </p>
              <p className={` ${isVisible ? classes.animate : ""}`}> food waste cycle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

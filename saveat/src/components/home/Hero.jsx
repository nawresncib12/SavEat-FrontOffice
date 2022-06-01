import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import home from "../../assets/home.png";
import { useRef,useEffect,useState } from "react";
import CountUp from 'react-countup';
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
       <div className={classes.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,0L48,21.3C96,43,192,85,288,85.3C384,85,480,43,576,48C672,53,768,107,864,122.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
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
              <h3>
                <CountUp end={1524} />
              </h3>
              
              <p className={` ${isVisible ? classes.animate : ""}`}>TNDs saved by users from</p>
              <p className={` ${isVisible ? classes.animate : ""}`}> their food expenses.</p>
            </div>
            <div className={`${classes.stat}  ${isVisible ? classes.animate : ""}`} >
              <h3>
                <CountUp end={185} />
              </h3>
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

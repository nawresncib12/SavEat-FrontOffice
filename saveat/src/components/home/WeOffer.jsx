import classes from "./WeOffer.module.css";
import HomeTitle from "../../UI/HomeTitle";
import Button from "../../UI/Button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const WeOffer = () => {
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
    <div ref={domRef} className={classes.weOfferContainer}>
      <div className={classes.weOffer}>
        <div  className={classes.description}>
          <div
            className={`${classes.anim}  ${isVisible ? classes.animate : ""}`}
          >
            <HomeTitle color="white">What do we offer ? </HomeTitle>
          </div>
          <p>
            Rescuing fresh and canned food from wholesalers that would have
            otherwise been thrown away.
          </p>
          <div
            className={`${classes.buttons}  ${
              isVisible ? classes.animate : ""
            }`}
          >
            <Button
              color="#4DAAAA"
              border="1px solid #4DAAAA"
              onClick={() => {
                navigate("/shop");
              }}
            >
              Buy a box
            </Button>

            <Button
              color="white"
              contentColor="#4DAAAA"
              border="1px solid #4DAAAA"
              onClick={() => {
                navigate("/offers");
              }}
            >
              Get A deal
            </Button>
          </div>
        </div>
        <div className={classes.functions}>
          <div className={classes.back}></div>
          <div className={classes.deco1}>
            <h1>......</h1>
            <h1>......</h1>
          </div>
          <div className={classes.func}>
            <div
              className={`${classes.flap1} 
                ${isVisible ? classes.animate : ""}`}
              ref={domRef}
            ></div>
            <div
              className={`${classes.flap2} 
                ${isVisible ? classes.animate : ""}`}
              ref={domRef}
            ></div>
            <h2>Get a deal</h2>
            <p>
              Restaurants approaching their closing hours offer to sell their
              last items with special discounts.
            </p>
          </div>
          <div className={classes.func}>
            <div
              className={`${classes.flap1} 
                ${isVisible ? classes.animate : ""}`}
              ref={domRef}
            ></div>
            <div
              className={`${classes.flap2} 
                ${isVisible ? classes.animate : ""}`}
              ref={domRef}
            ></div>{" "}
            <div
              className={`${classes.flap1} 
              ${isVisible ? classes.animate : ""}`}
              ref={domRef}
            ></div>
            <div
              className={`${classes.flap2} 
              ${isVisible ? classes.animate : ""}`}
              ref={domRef}
            ></div>
            <h2>Order a box</h2>
            <p>
              Boxes of approaching its expiration are sold for minimal prices.
            </p>
          </div>
          <div className={classes.deco}>
            <h3>United</h3>
            <h3>Against food waste</h3>
          </div>
        </div>
      </div>
      <div className={classes.waveWrapper + " " + classes.waveAnimation}>
        <div className={classes.waveWrapperInner + " " + classes.bgTop}>
          <div
            className={classes.wave + " " + classes.waveTop}
            style={{
              backgroundImage:
                " url('http://front-end-noobs.com/jecko/img/wave-top.png')",
            }}
          ></div>
        </div>
        <div className={classes.waveWrapperInner + " " + classes.bgMiddle}>
          <div
            className={classes.wave + " " + classes.waveMiddle}
            style={{
              backgroundImage:
                " url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
            }}
          ></div>
        </div>
        <div className={classes.waveWrapperInner + " " + classes.bgBottom}>
          <div
            className={classes.wave + " " + classes.waveBottom}
            style={{
              backgroundImage:
                "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;

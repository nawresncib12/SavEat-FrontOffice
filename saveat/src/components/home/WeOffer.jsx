import classes from "./WeOffer.module.css";
import HomeTitle from "../../UI/HomeTitle";
import Button from "../../UI/Button";
const WeOffer = () => {
  return (
    <div className={classes.weOffer}>
      <div className={classes.description}>
        <HomeTitle>What do we offer ? </HomeTitle>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do tempor.</p>
        <div className={classes.buttons}>
          <Button color="#4DAAAA" border="1px solid #4DAAAA">
            Buy a box
          </Button>

          <Button
            color="white"
            contentColor="#4DAAAA"
            border="1px solid #4DAAAA"
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
          <h2>Get a deal</h2>
          <p>
            Restaurants approaching their closing hours offer to sell their last
            items with special discounts.
          </p>
        </div>
        <div className={classes.func}>
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
  );
};

export default WeOffer;

import classes from "./OfferCard.module.css";
import Button from "../../UI/Button";
const OfferCard = ({offer}) => {
  return (
    <div className={classes.offerCard}>
      <div className={classes.discount}>-{offer.discount}%</div>
      <h1>{offer.name}</h1>
      <h2>{offer.product}</h2>
      <p>{offer.productDetail}</p>
      <div className={classes.prices}>
        <h3 className={classes.old}>{offer.oldPrice} Dt</h3>
        <h3 className={classes.new}>{offer.newPrice} Dt</h3>
      </div>
      <div className={classes.down}>
        <Button color="#4daaaa"> Take the deal</Button>
        <h3>{offer.items} Items to save</h3>
      </div>
    </div>
  );
};

export default OfferCard;

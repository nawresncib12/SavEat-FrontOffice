import classes from "./OfferCard.module.css";
import Button from "../../UI/Button";
const OfferCard = ({offer,setOpen,setOffer}) => {
  return (
    <div className={classes.offerCard}>
      <div className={classes.discount}>-{offer.discount}%</div>
      <h2>{offer.name}</h2>
      <h1>{offer.product}</h1>
      <p>{offer.productDetail}</p>
      <div className={classes.prices}>
        <h3 className={classes.old}>{offer.oldPrice} Dt</h3>
        <h3 className={classes.new}>{offer.newPrice} Dt</h3>
      </div>
      <div className={classes.down}>
        <Button onClick={() => {
              setOpen(true);
              setOffer(offer);
            }} color="#4daaaa"> Take the deal</Button>
        <h3>{offer.items} Items to save</h3>
      </div>
    </div>
  );
};

export default OfferCard;

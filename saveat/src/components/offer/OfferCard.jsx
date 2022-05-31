import classes from "./OfferCard.module.css";
import Button from "../../UI/Button";
const OfferCard = ({offer,setOpen,setOffer}) => {
  return (
    <div className={classes.offerCard}>
      <div className={classes.discount}>{Math.trunc(100*(offer.new_price/offer.old_price -1))}%</div>
      <h2>{offer.restaurant}</h2>
      <h1>{offer.product}</h1>
      <p>{offer.description}</p>
      <div className={classes.prices}>
        <h3 className={classes.old}>{offer.old_price} Dt</h3>
        <h3 className={classes.new}>{offer.new_price} Dt</h3>
      </div>
      <div className={classes.down}>
        <Button onClick={() => {
              setOpen(true);
              setOffer(offer);
            }} color="#4daaaa"> Take the deal</Button>
        <h3>{offer.stock} Items to save</h3>
      </div>
    </div>
  );
};

export default OfferCard;

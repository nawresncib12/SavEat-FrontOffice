import classes from "./OfferList.module.css";
import OfferCard from "./OfferCard";
import { useState } from "react";
import OfferModal from "./OfferModal";
const OfferList = () => {
  const [open, setOpen] = useState(false);
  const [offer, setOffer] = useState(null);
  const offers = [
    {
      name: "Joe's Pizza",
      product: "Pizza Margarita",
      productDetail: "Olive oil, tomato, cheese ,spices",
      oldPrice: 16,
      newPrice: 8,
      discount: 50,
      items: 5,
    },
    {
      name: "Joe's Pizza",
      product: "Pizza Margarita",
      productDetail: "Olive oil, tomato, cheese ,spices",
      oldPrice: 16,
      newPrice: 8,
      discount: 50,
      items: 5,
    },
    {
      name: "Joe's Pizza",
      product: "Pizza Margarita",
      productDetail: "Olive oil, tomato, cheese ,spices",
      oldPrice: 16,
      newPrice: 8,
      discount: 50,
      items: 5,
    },
    {
      name: "Joe's Pizza",
      product: "Pizza Margarita",
      productDetail: "Olive oil, tomato, cheese ,spices",
      oldPrice: 16,
      newPrice: 8,
      discount: 50,
      items: 5,
    },
    {
      name: "Joe's Pizza",
      product: "Pizza Margarita",
      productDetail: "Olive oil, tomato, cheese ,spices",
      oldPrice: 16,
      newPrice: 8,
      discount: 50,
      items: 5,
    },
  ];
  return (
    <div className={classes.offerList}>
      {open && <OfferModal offer={offer} setOpen={setOpen}></OfferModal>}
      {offers.map((offer, index) => {
        return (
          <OfferCard
            setOpen={setOpen}
            setOffer={setOffer}
            offer={offer}
            key={index}
          ></OfferCard>
        );
      })}
    </div>
  );
};

export default OfferList;

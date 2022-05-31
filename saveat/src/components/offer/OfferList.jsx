import classes from "./OfferList.module.css";
import OfferCard from "./OfferCard";
const OfferList = () => {
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
      {offers.map((offer, index) => {
        return <OfferCard offer={offer} key={index}></OfferCard>;
      })}
    </div>
  );
};

export default OfferList;

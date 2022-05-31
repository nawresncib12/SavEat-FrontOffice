import classes from "./OfferList.module.css";
import OfferCard from "./OfferCard";
import { useState,useEffect } from "react";
import OfferModal from "./OfferModal";
import { getAllOffers } from '../../api/api.offer';

const OfferList = () => {
  const [open, setOpen] = useState(false);
  const [offer, setOffer] = useState(null);

  const [offers, setoffers] = useState([])
  
  const getAll = async()=>{
    const res = await getAllOffers()
    if(!offers.length) setoffers(res.data.offers)
  }

  useEffect(() => {
    getAll()
  
  }, []);
  
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

import classes from "./OfferList.module.css";
import OfferCard from "./OfferCard";
import { useState, useEffect, useRef } from "react";
import OfferModal from "./OfferModal";
import { getAllOffers } from "../../api/api.offer";

const OfferList = ({scroll,setScroll}) => {
  const [open, setOpen] = useState(false);
  const [offer, setOffer] = useState(null);

  const [offers, setoffers] = useState([]);
  const offerList = useRef(null);
  const executeScroll = () =>
    offerList.current.scrollIntoView({ behavior: "smooth", block: "center" });
  useEffect(() => {
    if (scroll) {
      executeScroll();
      setScroll(false);
    }
  }, [scroll, setScroll]);
  const getAll = async () => {
    const res = await getAllOffers();
    if (!offers.length) setoffers(res.data.offers);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className={classes.offerList} ref={offerList}>
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

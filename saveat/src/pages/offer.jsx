import { loggedIn } from "../api/api.user";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";
import NavbarHead from "../components/home/NavbarHead";
import OfferList from "../components/offer/OfferList";
import Hero from "../components/offer/Hero";
const Offer = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        setLoading(false);
        navigate("/login");
      } else {
        setLoading(false);
      }
    }
    log();
  }, [navigate]);

  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <>
          <NavbarHead></NavbarHead>
          <Hero></Hero>
          <OfferList></OfferList>
        </>
      )}
    </>
  );
};

export default Offer;
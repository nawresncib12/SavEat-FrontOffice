import { loggedIn } from "../api/api.user";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";
import NavbarHead from "../components/home/NavbarHead";
import { BoxContainer } from "../components/shop/BoxContainer";
import Features from "../components/shop/Features";
import Hero from "../components/shop/Hero";
import Footer from "../components/shared/Footer";
const Shop = () => {
  const [scroll, setScroll] = useState(false);
  const [shop, setShop] = useState(false);
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
          <div>
            <NavbarHead></NavbarHead>
            <Hero setShop={setShop} setScroll={setScroll}></Hero>
            <Features scroll={scroll} setScroll={setScroll}></Features>
            <BoxContainer shop={shop} setShop={setShop} />

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Shop;

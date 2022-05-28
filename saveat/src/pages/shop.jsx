import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";
import { BoxContainer } from "../components/shop/BoxContainer";
import Features from "../components/shop/Features";
import Hero from "../components/shop/Hero";
const Shop = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        setLoading(false)
        navigate("/login");
      }else{
        setLoading(false)
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
              <Hero></Hero>
              <Features></Features>
              <BoxContainer />
          </div>
          
        </>
      )}
    </>
  );
};

export default Shop;

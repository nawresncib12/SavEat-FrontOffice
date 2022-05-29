import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderPage } from "./loader";
import WeOffer from "../components/home/WeOffer";
import NavbarHead from "../components/home/NavbarHead";
import Hero from "../components/home/Hero";
import Why from "../components/home/Why";
import Box from "../components/home/Box";
const Home = () => {
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
          <WeOffer></WeOffer>
          <Why></Why>
          <Box></Box>
        </>
      )}
    </>
  );
};

export default Home;

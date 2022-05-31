import { useState } from "react";
import WeOffer from "../components/home/WeOffer";
import NavbarHead from "../components/home/NavbarHead";
import Hero from "../components/home/Hero";
import Why from "../components/home/Why";
import Box from "../components/home/Box";
import Footer from "../components/shared/Footer";
import Deals from "../components/home/Deals";
const Home = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <NavbarHead></NavbarHead>
      <Hero setScroll={setScroll}></Hero>
      <WeOffer></WeOffer>
      <Why></Why>
      <Box scroll={scroll} setScroll={setScroll}></Box>
      <Deals></Deals>
      <Footer />
    </>
  );
};

export default Home;

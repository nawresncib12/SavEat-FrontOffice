import React, { useEffect } from "react";
import SideBar from "../components/profile/SideBar";
import ProfileCard from "../components/profile/ProfileCard";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import EditProfile from "../components/profile/EditProfile";
import EditSettings from "../components/profile/EditSettings";
import Pereferences from "../components/profile/Pereferences";
import Cart from "../components/profile/Cart";
import Deals from "../components/profile/Deals";
import Orders from "../components/profile/Orders";
import ToggleButton from "../components/profile/toggle button/toggle";
import useWindowSize from "../components/windowSize";
import { loggedIn } from "../api/api.user";
import NavbarHead from "../components/home/NavbarHead";
const Profile = () => {
  const { state } = useLocation();
  const size = useWindowSize();

  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        navigate("/login");
      }
    }
    log();
    if (window.screen.width < 650) setActive(-1);
    else {
      setActive(preactive);
      setphoneNav(false);
    }
  }, [window.screen.width, navigate]);
  var act;

  if (state) {
    if (state.activeSlide) {
      act = state.activeSlide;
    }
  } else {
    act = null;
  }
  var defau;
  defau =window.screen.width > 650 ? 0 : -1;
  const [active, setActive] = useState(act?act:defau);
  const [preactive, setPrective] = useState(active);
  const [phoneNav, setphoneNav] = useState(false);
  const [avatar, setAvatar] = useState(0);

  const f = (x) => {
    if (x >= 0) {
      setActive(x);
      setPrective(x);
    } else {
      setActive(-1 - x);
      setPrective(-1 - x);

      setphoneNav(true);
    }
  };

  return (
    <>
      <NavbarHead only={true}></NavbarHead>
      <div
        style={{ display: "flex", height: "100%", justifyContent: "center" }}
      >
        <ToggleButton fn={f} />
        <SideBar activated={active} fn={f} />
        {active === 0 && <EditProfile avatar={avatar} setAvatar={setAvatar} />}
        {active === 1 && <EditSettings />}
        {active === 2 && <Pereferences />}
        {active === 3 && <Cart />}
        {active === 4 && <Deals />}
        {active === 5 && <Orders />}
        {!phoneNav && <ProfileCard avatar={avatar} setAvatar={setAvatar} />}
      </div>
    </>
  );
};

export default Profile;

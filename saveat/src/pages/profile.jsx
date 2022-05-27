import React, { useEffect } from "react";
import SideBar from "../components/profile/SideBar";
import ProfileCard from "../components/profile/ProfileCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditProfile from "../components/profile/EditProfile";
import EditSettings from "../components/profile/EditSettings";
import Pereferences from "../components/profile/Pereferences";
import Cart from "../components/profile/Cart";
import Deals from "../components/profile/Deals";
import Orders from "../components/profile/Orders";
import ToggleButton from "../components/profile/toggle button/toggle";
import { loggedIn } from "../api/api.user";
const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        navigate("/login");
      }
    }
    log();
  }, [navigate]);

  useEffect(() => {
    if (window.screen.width < 650) setActive(-1);
    else setActive(0);
  }, [window.screen.width]);

  const [active, setActive] = useState(window.screen.width > 650 ? 0 : -1);
  const [phoneNav, setphoneNav] = useState(false);

  const f = (x) => {
    if (x >= 0) setActive(x);
    else {
      setActive(-1 - x);
      setphoneNav(true);
    }
  };

  return (
    <div style={{ display: "flex", height: "100%", justifyContent: "center" }}>
      <ToggleButton fn={f} />
      <SideBar fn={f} />
      {active === 0 && <EditProfile />}
      {active === 1 && <EditSettings />}
      {active === 2 && <Pereferences />}
      {active === 3 && <Cart />}
      {active === 4 && <Deals />}
      {active === 5 && <Orders />}
      {!phoneNav && <ProfileCard />}
    </div>
  );
};

export default Profile;

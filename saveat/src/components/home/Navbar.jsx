import classes from "./Navbar.module.css";
import { logout, loggedIn } from "../../api/api.user";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        setLogged(false);
      } else {
        setLogged(true);
      }
    }
    log();
  }, [navigate]);

  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  return (
    <div className={classes.navbar}>
      <h1
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </h1>
      <h1
        onClick={() => {
          navigate("/shop");
        }}
      >
        Box Shop
      </h1>
      <h1
        onClick={() => {
          navigate("/offers");
        }}
      >
        Restaurant Offers
      </h1>
      <h1
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </h1>
      <h1
        onClick={() => {
          if (logged) {
            signout();
          } else {
            navigate("/login");
          }
        }}
      >
        {logged ? "Log out" : "Log in"}
      </h1>
    </div>
  );
};

export default Navbar;

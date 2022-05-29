import classes from "./Navbar.module.css";
import { logout } from "../../api/api.user";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  return (
    <div className={classes.navbar}>
      <h1>Home</h1>
      <h1>Box Shop</h1>
      <h1>Deals</h1>
      <h1>My Profile</h1>
      <h1  onClick={signout} >Log out</h1>
    </div>
  );
};

export default Navbar;

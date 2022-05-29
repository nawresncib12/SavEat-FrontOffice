import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h1>Home</h1>
      <h1>Box Shop</h1>
      <h1>Deals</h1>
      <h1>My Profile</h1>
      <h1>Log out</h1>
    </div>
  );
};

export default Navbar;

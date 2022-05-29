import { useState, useEffect, useRef } from "react";
import classes from "./NavbarHead.module.css";
import Navbar from "./Navbar";
import logo from "../../assets/welcomePic.png"
const NavbarHead = (props) => {
  const [navbar, setNavbar] = useState("");
  const [name, setName] = useState("Menu");
  const target = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(80);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleResize = () => {
    const heigh = target.current.getBoundingClientRect().height;
    setHeight(heigh);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={classes.homeNavbarHead}>
      {navbar === "opened" && <Navbar></Navbar>}
      <div className={classes.header}>
        <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <h3 className={`${props.only?classes.blue:""}`}>SavEat</h3>
        </div>
        <div></div>
        <div className={classes.buttonNav}>
          <div
            className={`${classes.menu} ${
              (scrollPosition < height / 1.3 && props.only !== true) ||
              navbar === "opened"
                ? ""
                : classes.scrolled
            }`}
          >
            {name}
          </div>
          <div
            onClick={() => {
              if (navbar === "") {
                setNavbar("opened");
              } else {
                if (navbar === "opened") {
                  setNavbar("closed");
                } else {
                  setNavbar("opened");
                }
              }
              setTimeout(() => {
                if (name === "Menu") {
                  setName("Close");
                } else {
                  setName("Menu");
                }
              }, 2000);
            }}
            className={`${classes.navbarIcon} ${
              (scrollPosition < height / 1.3 && props.only !== true) ||
              navbar === "opened"
                ? ""
                : classes.scrolled
            }  ${navbar === "" ? "" : classes[navbar]}`}
          >
            <div
              className={`${classes.navbarHover} ${
                (scrollPosition < height / 1.3 && props.only !== true) ||
                navbar === "opened"
                  ? ""
                  : classes.scrolled
              }`}
            ></div>
          </div>
        </div>
      </div>
      <svg

        className={`${classes.wave} ${ props.only!==true?"":classes.hide }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
      >
        <path
          ref={target}
          fill="#4daaaa"
          fill-opacity="1"
          d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,149.3C560,160,640,192,720,218.7C800,245,880,267,960,234.7C1040,203,1120,117,1200,96C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default NavbarHead;

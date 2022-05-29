import { useState, useEffect, useRef } from "react";
import classes from "./NavbarHead.module.css";
import Navbar from "./Navbar";
import logo from "../../assets/welcomePic.png";
const NavbarHead = (props) => {
  const [navbar, setNavbar] = useState("");
  const [name, setName] = useState("Menu");
  const target = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleResize = () => {
    const heigh = target.current.getBoundingClientRect().height;

    if (window.innerWidth > 1000) {
      setHeight(heigh - 80);
    } else {
      setHeight(heigh);
    }
  };
  useEffect(() => {
    setHeight(target.current.getBoundingClientRect().height-80)
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
          <h3 className={`${props.only ? classes.blue : ""}`}>SavEat</h3>
        </div>
        <div></div>
        <div className={classes.buttonNav}>
          <div
            className={`${classes.menu} ${
              (scrollPosition < height && props.only !== true) ||
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
              (scrollPosition < height && props.only !== true) ||
              navbar === "opened"
                ? ""
                : classes.scrolled
            }  ${navbar === "" ? "" : classes[navbar]}`}
          >
            <div
              className={`${classes.navbarHover} ${
                (scrollPosition < height && props.only !== true) ||
                navbar === "opened"
                  ? ""
                  : classes.scrolled
              }`}
            ></div>
          </div>
        </div>
      </div>

      <svg
        className={`${classes.wave} ${props.only !== true ? "" : classes.hide}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          ref={target}
          fill="#4daaaa"
          fill-opacity="1"
          d="M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,176C840,192,960,224,1080,240C1200,256,1320,256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default NavbarHead;

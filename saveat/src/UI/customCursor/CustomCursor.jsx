import { useEffect } from "react";
import classes from "./customCursor.module.css";
import { useRef } from "react";
const CustomCursor = () => {
  //follows the cursor
  const customRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { screenX, screenY } = e;
      const mouseX = screenX - customRef.current.clientWidth / 2;
      const mouseY = screenY - customRef.current.clientHeight ;
      console.log(e);
      customRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px)`;
      console.log(customRef.current.style.transform);
    };
    // add the event listener
    window.addEventListener("mousemove", onMouseMove);
    // cleanup function
    return () => {
      // remove the event listener when the component unmounts
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className={classes.appCursor} ref={customRef} />;
};

export default CustomCursor;

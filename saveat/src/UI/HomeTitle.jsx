import classes from "./HomeTitle.module.css";
const HomeTitle = (props) => {
  return (
    <>
      <h1 style={{ color: props.color }} className={classes.homeTitle+" "+classes.bordered}>
        {props.children}
      
      </h1>
    </>
  );
};

export default HomeTitle;

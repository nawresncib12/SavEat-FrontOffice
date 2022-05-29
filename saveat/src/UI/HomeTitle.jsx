import classes from "./HomeTitle.module.css";
const HomeTitle = (props) => {
  return (
    <>
      <h1 style={{ color: props.color }} className={classes.homeTitle}>
        {props.children}
        <div className={classes.zigzag}></div>
      </h1>
    </>
  );
};

export default HomeTitle;

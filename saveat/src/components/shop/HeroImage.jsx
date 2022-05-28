import classes from "./HeroImage.module.css"
import box from "../../assets/heroShop.png"
const HeroImage = () => {
    return (<div className={classes.heroImage}>
        <div className={classes.decor}></div>
        <img src={box} alt="box" />
    </div>);
}
 
export default HeroImage;
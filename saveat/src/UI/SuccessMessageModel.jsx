import classes from "./SuccessMessageModal.module.css";
import { Fragment } from "react/cjs/react.production.min";
import avatar from "../assets/avatar1.svg";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const SuccessMessageModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}

      {ReactDom.createPortal(
        <ModalOverlay>
          <div className={classes.successMessageContainer}>
            <div className={classes.info}>
              <img src={avatar} alt="" />
              <p>Password reset was successful ! </p>
              <p>You are being redirected to log in with your new password</p>
            </div>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default SuccessMessageModal;

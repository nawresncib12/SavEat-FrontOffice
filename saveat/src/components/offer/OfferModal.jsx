import classes from "./OfferModal.module.css";
import { Fragment } from "react";
import { useState } from "react";
import ReactDom from "react-dom";
import Button from "../../UI/Button";
import { TextField } from "../auth/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ButtonLoader from "../../UI/ButtonLoader";
import { connect } from 'react-redux';
import { addDeal } from "../../api/api.deal";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => {
        props.setOpen(false);
      }}
      className={classes.backdrop}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const OfferModal = (props) => {
  console.log("props",props)
  const [loading, setloading] = useState(false);
  const [val, setval] = useState(1);
  const offer = props.offer;
  console.log(offer)
  const submitCheckout = async (values) => {
    console.log(values)
    const res =await addDeal({customer_address:values.address,customer_phone:values.phone, quantity:values.qauntity ,offer : offer._id})

    props.setOpen(false);
  };
  const handleChange=(e)=>{
    if(e.target.value>=1 && e.target.value<= props.offer.stock){
      setval(e.target.value)
    }
  }
  const validate = Yup.object({
    phone: Yup.string()
      .required("Phone number is required !")
      .min(8, "Phone number must be at least 8 charaters !"),
    address: Yup.string().required("Adress is required !"),
  });
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop setOpen={props.setOpen} />,
        portalElement
      )}

      {ReactDom.createPortal(
        <ModalOverlay setOpen={props.setOpen} offer={offer}>
          <div className={classes.offerModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="25px"
              width="25px"
              height="25px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ cursor: "pointer", float: "right" }}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <g>
                <g>
                  <path
                    fill="#FFBCBC"
                    d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M327.115,365.904
			L256,294.789l-71.115,71.115l-38.789-38.789L217.211,256l-71.115-71.115l38.789-38.789L256,217.211l71.115-71.115l38.789,38.789
			L294.789,256l71.115,71.115L327.115,365.904z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <h2>Make a deal</h2>
            <Formik
              initialValues={{
                phone:  props.info.phone,
                address: props.info.address,
                quantity: props.offer.stock,
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                submitCheckout(values);
                setloading(true);
              }}
            >
              {(formik) => (
                <div className={classes.checkoutForm}>
                  <Form>
                    <TextField label="Phone number" name="phone" type="text" />
                    <TextField label="Address" name="address" type="text" />
                    <TextField label="Quantity" name="quantity" type="number"  onChange={e=>{handleChange(e)} }  value={val}/>
                    <h5 className={classes.note}>
                      Maximum quantity :{offer.stock}
                    </h5>
                    <div className={classes.order}>
                      <h3>Order Summary</h3>

                      <div className={classes.element}>
                        <p className={classes.name}>{offer.product}</p>
                        <p className={classes.name}>x {val}</p>
                        <p className={classes.qauntity}>{offer.new_price} DT</p>
                      </div>

                      <div className={classes.line}></div>
                      <div className={classes.element}>
                        <p className={classes.name}>total</p>
                        <p className={classes.name}></p>
                        <p className={classes.price}>{offer.new_price* val} Dt</p>
                      </div>
                    </div>
                    
                    <h3 style={{fontSize:"calc(15px + 1vmin)"}}>You saved {val*(offer.old_price-offer.new_price)} DT !!</h3>
                    <h5 className={classes.note}>
                      Submit to receive a confirmation phone call.
                    </h5>
                    <h5 className={classes.note}>Payment is upon delivery.</h5>
                    <div className={classes.submit}>
                      {loading ? (
                        <div
                          style={{
                            height: "10px",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "40px",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <ButtonLoader />
                        </div>
                      ) : (
                        <Button
                          color="#4DAAAA"
                          content="Submit"
                          type="submit"
                          onClick={() => {}}
                        />
                      )}
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
const mapStateToProps=(state)=>{
  return {
      info: state.profileCardReducer,
  }
}
export default  connect(mapStateToProps,null)(OfferModal);


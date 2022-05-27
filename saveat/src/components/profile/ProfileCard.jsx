import React, { useState, useRef, useEffect } from "react";
import style from "./ProfileCard.module.css";
import avatar from "../../assets/avatar1.svg";
import logOut from "../../assets/logout.svg";
import phoneImg from "../../assets/phone.svg";
import addressImg from "../../assets/address.svg";
import birthdayImg from "../../assets/birthday.svg";
import { logout } from "../../api/api.user";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileCard = ({ info }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("stranger");
  const [email, setEmail] = useState("ncibnawres04@gmail.com");
  const [adress, setAdress] = useState("-");
  const [birthday, setBirthday] = useState("-");
  const [phone, setPhone] = useState("-");
  const [progressMessage, setProgressMessage] = useState(
    "You are halfway through !"
  );
  const [percent, setPercent] = useState(0);
  const [deal, setDeal] = useState(true);
  const [meal, setMeal] = useState(false);
  const [foodBox, setFoodBox] = useState(true);

  const ref = useRef();
  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  useEffect(() => {
    ref.current.style.setProperty("--width", percent + "%");
    let p = 0;
    if (info.firstName) p++;
    if (info.lastName) p++;
    if (info.address) p++;
    if (info.birthday) p++;
    if (info.phone) p++;
    if (p * 20 != percent) setPercent(20 * p);
  }, [percent, info]);
  if (!info) return "aaaaaaaaa";
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <img
          onClick={signout}
          src={logOut}
          alt="logout"
          className={style.logout}
        />
        <div className={style.avatar}>
          <img className={style.img} src={avatar} alt="avatar" />
        </div>
        <div className={style.info}>
          <div className={style.title}>
            <h2> Hi, {info.firstName}</h2>
          </div>
          <div className={style.details}>
            <div className={style.email}>{info.email}</div>
            <div className={style.contact}>
              <div style={{ display: "flex" }}>
                <img src={phoneImg} alt="phone" />
                <div>phone : {info.phone}</div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={addressImg} alt="adress" />
                <div>
                  Address : {info.address ? info.address.substring(0, 10) : ""}
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={birthdayImg} alt="birthday" />
                <div>
                  Birthday:{" "}
                  {info.birthday ? info.birthday.substring(0, 10) : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        {deal && (
          <div className={style.proposition}>
            <div className={style.txt}>You haven’t made any deal yet</div>
            <div className={style.btn}> Start now</div>
          </div>
        )}

        {meal && (
          <div className={style.proposition}>
            <div className={style.txt}>You haven’t saved any meal yet</div>
            <div className={style.btn}> Start now</div>
          </div>
        )}

        {foodBox && (
          <div className={style.proposition}>
            <div className={style.txt}>You haven’t saved any food box yet</div>
            <div className={style.btn}> Start now</div>
          </div>
        )}

        <div className={style.progressBarCont}>
          <div className={style.div}>Profile Progress</div>
          <div className={style.msg}> {progressMessage}</div>
          <div className={style.bar} ref={ref}>
            <div className={style.percent}>{`${percent}%`}</div>
          </div>
          <div className={style.progress}></div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    info: state.profileCardReducer,
  };
};

export default connect(mapStateToProps)(ProfileCard);

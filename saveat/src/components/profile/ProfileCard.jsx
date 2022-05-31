import React, { useState, useRef, useEffect } from "react";
import style from "./ProfileCard.module.css";
import avatar from "../../assets/avatar1.svg";
import logout from "../../assets/logout.svg";
import { getMydeals } from "../../api/api.deal";
import { getMyOrders } from "../../api/api.order";
import phoneImg from "../../assets/phone.svg";
import addressImg from "../../assets/address.svg";
import birthdayImg from "../../assets/birthday.svg";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import edit from "../../assets/edit.png";
const ProfileCard = ({ info }) => {
  const [progressMessage, setProgressMessage] = useState(
    "You are halfway through !"
  );
  const [percent, setPercent] = useState(0);
  const [avatars, setAvatars] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const [orders, setorders] = useState([]);
  const [deals, setdeals] = useState([]);

  const getDeals = async () => {
    const res = await getMydeals();
    if (!deals.length) setdeals(res.data.deals);
  };

  useEffect(() => {
    getDeals();
  }, [deals]);

  const getAll = async () => {
    const orders = await getMyOrders();
    if (!orders.length) setorders(orders.data.myOrders);
  };

  useEffect(() => {
    getAll();
  }, []);
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
        <img src={logout} alt="logout" className={style.logout} />
        {avatars && (
          <div className={style.avatars}>
            <div className={style.row}>
              <div
                className={style.column}
                style={{ borderRadius: "10px 0 0 0 " }}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
              <div
                className={style.column}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
              <div
                className={style.column}
                style={{ borderRadius: " 0 10px 0 0 " }}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className={style.row}>
              <div
                className={style.column}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
              <div
                className={style.column}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
              <div
                className={style.column}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <div className={style.row}>
              <div
                className={style.column}
                style={{ borderRadius: "0 0 0 10px  " }}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
              <div
                className={style.column}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
              <div
                className={style.column}
                style={{ borderRadius: " 0 0  10px 0 " }}
                onClick={() => {
                  setAvatars(false);
                }}
              >
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        )}
        <div className={style.avatar}>
          <img className={style.img} src={avatar} alt="avatar" />
          <div
            className={style.edit}
            onClick={() => {
              setAvatars(!avatars);
            }}
          >
            <img src={edit} alt="edit" />
          </div>
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
        {deals.length === 0 && (
          <div className={style.proposition}>
            <div className={style.txt}>You haven’t made any deal yet</div>
            <div className={style.btn} onClick={()=>{navigate("/offers")}}> Start now</div>
          </div>
        )}

        {deals.length !== 0 && (
          <div className={style.proposition}>
            <div className={style.txt}>Number of deals made </div>
            <div className={style.txt}>{deals.length}</div>
          </div>
        )}

        {orders.length === 0 && (
          <div className={style.proposition}>
            <div className={style.txt}>You haven’t saved any meal yet</div>
            <div className={style.btn} onClick={()=>{navigate("/shop")}}> Start now</div>
          </div>
        )}
        {orders.length !== 0 && (
          <div className={style.proposition}>
            <div className={style.txt}>Number of meals saved</div>
            <div className={style.txt}>{orders.length}</div>
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

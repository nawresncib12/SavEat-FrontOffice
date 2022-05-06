import React,{useState,useRef,useEffect} from 'react'
import style from './ProfileCard.module.css'
import avatar from '../../assets/avatar1.svg'
import logout from '../../assets/logout.svg'
import phoneImg from "../../assets/phone.svg"
import addressImg from "../../assets/address.svg"
import birthdayImg from "../../assets/birthday.svg"
import { connect } from 'react-redux';
import edit from '../../assets/edit.png'
const ProfileCard = ({info}) => {

    const [progressMessage, setProgressMessage] = useState("You are halfway through !")
    const [percent, setPercent] = useState(0)
    const [deal, setDeal] = useState(true)
    const [meal, setMeal] = useState(false)
    const [avatars, setAvatars] = useState(false)
    const [foodBox, setFoodBox] = useState(true)

    const ref=useRef();

useEffect(()=> {
ref.current.style.setProperty("--width",percent+"%");
let p =0;
if(info.firstName)p++
if(info.lastName)p++
if(info.address)p++
if(info.birthday)p++
if(info.phone)p++
if(p*20!=percent)setPercent(20*p)
},[percent,info])

    if(!info)return "aaaaaaaaa"
  return (
    <div className={style.container}>
        <div className={style.wrap}>
            <img src={logout} alt="logout" className={style.logout} />
            {avatars&&<div className={style.avatars} >
                        <div className={style.row}>
                            <div className={style.column} style={{borderRadius:"10px 0 0 0 " }} onClick={()=>{setAvatars(false)}}>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className={style.column}onClick={()=>{setAvatars(false)}}>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className={style.column}style={{borderRadius:" 0 10px 0 0 " }} onClick={()=>{setAvatars(false)}} >
                             <img src={avatar} alt="avatar" />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.column}onClick={()=>{setAvatars(false)}}>
                            <img src={avatar} alt="avatar" />
                            </div>
                            <div className={style.column}onClick={()=>{setAvatars(false)}}>
                            <img src={avatar} alt="avatar" />
                            </div>
                            <div className={style.column}onClick={()=>{setAvatars(false)}}>
                            <img src={avatar} alt="avatar" />

                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.column} style={{borderRadius:"0 0 0 10px  " }}onClick={()=>{setAvatars(false)}}>
                            <img src={avatar} alt="avatar" />
                            </div>
                            <div className={style.column}onClick={()=>{setAvatars(false)}}>
                            <img src={avatar} alt="avatar" />
                            </div>
                            <div className={style.column} style={{borderRadius:" 0 0  10px 0 " }}onClick={()=>{setAvatars(false)}}>
                            <img src={avatar} alt="avatar" />
                            </div>
                        </div>
                        
                    </div>}
            <div className={style.avatar}>
                <img  className={style.img} src={avatar} alt="avatar" />
                <div className={style.edit} onClick={()=>{setAvatars(!avatars)}} >
                <img src={edit} alt="edit"  />
                </div>
            </div>
            <div className={style.info}>
                <div className={style.title}>
                    <h2 > Hi, {info.firstName}</h2>
                </div>
                <div className={style.details}>
                    <div className={style.email}>{info.email}</div>
                    <div className={style.contact}>
                        <div style={{display:"flex"}}>
                            <img src={phoneImg}  alt="phone" />
                            <div>phone : {info.phone}</div>
                        </div>
                        <div style={{display:"flex"}}>
                            <img src={addressImg}  alt="adress" />
                            <div>Address : {(info.address)?(info.address).substring(0, 10):""}</div>
                        </div>
                        <div style={{display:"flex"}}>
                            <img src={birthdayImg}  alt="birthday" />
                            <div>Birthday: {(info.birthday)?(info.birthday).substring(0, 10):""}</div>
                        </div>
                    </div>
                </div>
            </div>
           {deal && <div className={style.proposition}>
                <div className={style.txt}>You haven’t made any deal yet</div>
            <div className={style.btn}> Start now</div>
            </div>}

            {meal && <div className={style.proposition}>
                <div className={style.txt}>You haven’t saved any meal yet</div>
            <div className={style.btn}> Start now</div>
            </div>}

            {foodBox &&<div className={style.proposition}>
                <div className={style.txt}>You haven’t saved any food box yet</div>
            <div className={style.btn}> Start now</div>
            </div>}

            <div className={style.progressBarCont}>
                <div className={style.div}>Profile Progress</div>
                <div className={style.msg}> {progressMessage}</div>
                <div className={style.bar} ref={ref}>
                    <div className={style.percent} >{`${percent}%`}</div>
                </div>
                <div className={style.progress}></div>
            </div>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
         info :state.profileCardReducer
    }
}

export default connect(mapStateToProps)(ProfileCard);

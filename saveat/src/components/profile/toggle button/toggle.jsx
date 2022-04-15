import React,{useState} from 'react'
import "./toggle.css"
import SideNav  from '../sideNav/sideNav';

const X = ({fn}) => {
    const [state, setstate] = useState("")
    const [Color, setColor] = useState("white")
    const setToggleColor = (c)=>{
        setColor(c)
    }
    return (
        <div className='X' onClick={()=>{(!state)?setstate("open"):setstate("")}}>
            <div className={`menu-btn ${state}`} >
            <div className={`middle-menu-btn ${Color}`}></div>
            </div> 
            <SideNav setToggleColor={setToggleColor} fn={fn} open={state}/>
        </div>
    )
}

export default X
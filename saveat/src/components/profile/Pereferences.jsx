import React, { useState } from 'react'
import style from './Pereferences.module.css'
import glutenimg from '../../assets/gluten.png'
import lactoseimg from '../../assets/lactose-free.png'
import nutsimg from '../../assets/nut.png';
import cannedimg from '../../assets/canned-food.png';
import freshimg from '../../assets/fresh.png';
import { Button } from '../../UI/Button';
const Pereferences = () => {

  const [gluten,setGluten] = useState(false);
  const [lactose,setlactose] = useState(false);
  const [nuts,setNuts] = useState(false);
  const [foodtype,setFoodtype] = useState('canned');
  const [freshPreferences,setFreshPreferences] = useState([]);
  const [cannedPreferences,setCannedPreferences] = useState([]);

  const handleInputChange = (event) => {
    const target = event.target;
    let value = target.value;
  
    if(target.checked){
        
        cannedPreferences.push(value)
    }else{
        cannedPreferences.splice(value, 1);
    }
    
}
const handleInputChange1 = (event) => {
  const target = event.target;
  let value = target.value;

  if(target.checked){
      
      freshPreferences.push(value)
  }else{
      freshPreferences.splice(value, 1);
  }
  
}
  
  const handleData = (e) => {
    e.preventDefault()
    console.log("canned : " +cannedPreferences)
    console.log("fresh : " +freshPreferences)
    console.log("gluten : " + gluten)
    console.log("lactose : " + lactose)
    console.log("nuts : " + nuts)
  }
  return (
    <div className={style.container}>
        <div className={style.title}><h1>MY PREFERENCES</h1> </div>
        <div className={style.cont}>
          <p className={style.intro}>
          Are you allergic to some food elements 
          ? Or do you have  some special preferences
           ? Complete your profile so we can offer 
           you the best food deals !
          </p>
          <div className={style.foodsection}>
            <h4 className={style.sectionHeader}>Allergies You Might Suffer From ...</h4>
            <div className={style.foodItems}>
              <div onClick={() => setGluten(!gluten)} className={style.fooditem} style={ gluten === true ? {background:"#FFBCBC"} : {background:"#fff",border:"2px solid #6CD6D6"}}>
                <img src={glutenimg} alt="" />
                <p style={gluten === true ? {color:"#fff"}: {color:"#A5A5A5"}}>Gluten</p>
              </div>
              <div onClick={() => setlactose(!lactose)} className={style.fooditem} style={ lactose === true ? {background:"#FFBCBC"} : {background:"#fff",border:"2px solid #6CD6D6"}}>
                <img src={lactoseimg} alt="" />
                <p style={lactose === true ? {color:"#fff"}: {color:"#A5A5A5"}}>Lactose</p>
              </div>
              <div onClick={() => setNuts(!nuts)} className={style.fooditem} style={ nuts === true ? {background:"#FFBCBC"} : {background:"#fff",border:"2px solid #6CD6D6"}}>
                <img src={nutsimg} alt="" />
                <p style={nuts === true ? {color:"#fff"}: {color:"#A5A5A5"}}>Nuts</p>
              </div>
            </div>
            

          </div>
          <div className={style.foodsection}>
            <h4 className={style.sectionHeader}>Food You Might Want To Avoid ...</h4>
            <div className={style.foodtype}>
              <div onClick={() => {setFoodtype('canned')}} className={style.foodchoice} style={foodtype === 'canned' ? {background:"#6CD6D6"}: {background:"#fff"}}>
                <img src={cannedimg} alt="" />
              </div>
              <div onClick={() => {setFoodtype('fresh')}} className={style.foodchoice} style={foodtype === 'fresh' ? {background:"#6CD6D6"}: {background:"#fff"}}>
                <img src={freshimg} alt="" />
              </div>
            </div>
            <form onSubmit={handleData}>
              {
               
                <div className={style.foodchoiceitems} style={foodtype === 'fresh' ? {opacity:"0",pointerEvents:"none",position:"absolute"}: null}>
                  <div className={style.section}>
                    <div className={style.foodchoiceitem}>
                      <input type="checkbox" name="cannedPreferences" value="canned1" onChange={handleInputChange} />
                      <span>canned1</span>
                    </div>
                    <div className={style.foodchoiceitem}>
                      <input type="checkbox" name="cannedPreferences" value="canned2" onChange={handleInputChange}/>
                      <span>canned2</span>
                    </div>
                    <div className={style.foodchoiceitem}>
                      <input type="checkbox" name="cannedPreferences" value="canned3" onChange={handleInputChange} />
                      <span>canned3</span>
                    </div>
                  </div>
                  <div className={style.section}>
                    <div className={style.foodchoiceitem}>
                      <input type="checkbox" name="cannedPreferences" value="canned4" onChange={handleInputChange} />
                      <span>canned4</span>
                    </div>
                    <div className={style.foodchoiceitem}>
                      <input type="checkbox" name="cannedPreferences" value="canned5" onChange={handleInputChange} />
                      <span>canned5</span>
                    </div>
                    <div className={style.foodchoiceitem}>
                      <input type="checkbox" name="cannedPreferences" value="canned6" onChange={handleInputChange}/>
                      <span>canned6</span>
                    </div>
                  </div>
                  
                  

                </div> }
              {
                
                <div className={style.foodchoiceitems} style={foodtype === 'canned' ? {opacity:"0",pointerEvents:"none",position:"absolute"}: null}>
                <div className={style.section}>
                  <div className={style.foodchoiceitem}>
                    <input type="checkbox" name="freshPreferences" value="fresh1" onChange={handleInputChange1} />
                    <span>fresh1</span>
                  </div>
                  <div className={style.foodchoiceitem}>
                    <input type="checkbox" name="freshPreferences" value="fresh2" onChange={handleInputChange1} />
                    <span>fresh2</span>
                  </div>
                  <div className={style.foodchoiceitem}>
                    <input type="checkbox" name="freshPreferences" value="fresh3" onChange={handleInputChange1} />
                    <span>fresh3</span>
                  </div>
                </div>
                <div className={style.section}>
                  <div className={style.foodchoiceitem}>
                    <input type="checkbox" name="freshPreferences" value="fresh4" onChange={handleInputChange1}/>
                    <span>fresh4</span>
                  </div>
                  <div className={style.foodchoiceitem}>
                    <input type="checkbox" name="freshPreferences" value="fresh5" onChange={handleInputChange1} />
                    <span>fresh5</span>
                  </div>
                  <div className={style.foodchoiceitem}>
                    <input type="checkbox" name="freshPreferences" value="fresh6" onChange={handleInputChange1}/>
                    <span>fresh6</span>
                  </div>
                </div>
                
                

                </div>
              }
              <div className={style.submit}>
                <Button content="Save" color="#6CD6D6" type="submit" />
              </div>
            </form>
          

          </div>
          
        </div>
    </div>
  )
}

export default Pereferences
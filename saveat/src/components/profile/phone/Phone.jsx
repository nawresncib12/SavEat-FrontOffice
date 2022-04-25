import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Phone = () => {
  
  const [value,setValue] = useState('+216');
    return (
    <div>
        <label >Phone Number</label>
        <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="TN"
            value={value}
            onChange={setValue}
            containerStyle={{
                boxSizing:" border-box",
                borderRadius: "5px",
                outline: 0,
                background: "#F0F0FF",
                border: "2px solid #A5A5A5",
                marginTop:"2px"
              }}
              inputStyle={{
                border:"none",
                background: "#F0F0FF"
              }}
            
            />
    </div>
  )
}


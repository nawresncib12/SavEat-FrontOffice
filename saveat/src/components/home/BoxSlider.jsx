import {React, useState} from 'react'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
//import box from '../../common/data/box.json';
import Box from '../shop/Box';
import"./BoxSlider.css";
import { useEffect, useRef } from "react";
import { getAllBoxes } from "../../api/api.box";
export const BoxSlider = () => {
    const [box, setbox] = useState ([])
  
     const getAll = async()=>{
      const box = await getAllBoxes()
      if(!box.length) setbox(box.data.boxes)
    }
  
    useEffect(() => {
      getAll()
       
    },[]);
  
      const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const [boxIndex, setBoxIndex] = useState(0);
        
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setBoxIndex(next),
      };
    return (
    <div className="sliderBox">
         <Slider {...settings}>
            {box.map((box, idx) => (
            <div className={idx === boxIndex ? "slide activeSlide" : "slide"}>
                {<Box mode="slider" id={box.id} category={box.category} subcategory={box.subCategory} price={box.price} items={box.items} />}
           
            </div>
            ))}
        </Slider>
    </div>
  )
}

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import { styled } from "styled-components";
import './slider.css';

const Wpapper = styled.div`
    transition: all 1.5s ease ;
    transform: translateX(${(props) => props.slide * -100}vw);
`

const Slider = ({ sliderItems }) => {
    const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     setSlide(slide === sliderItems.length - 1 ? 0 : slide + 1);
//   };

//   const prevSlide = () => {
//     setSlide(slide === 0 ? sliderItems.length - 1 : slide - 1);
//   };

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlide(slide > 0 ? slide - 1 : 2);
        } else {
            setSlide(slide < 2 ? slide + 1 : 0);
        }

    }
    
    return (
        <div className="slider-container">

            <div direction="left" className="arrow arrow-left" onClick={() => handleClick("left")}>
                <MdKeyboardArrowLeft />
            </div>
            
            
            <Wpapper className="slideWrapper" slide={slide}>
                {sliderItems.map(item => {
                    return (
                        <div className="slide" bg={item.bg} key={item.id} >
                        <div className="imgContainer">
                            <img className="imgHome" src={`${item.img}.png`} alt="girlImage"/>
                        </div>
                        <div className="infoContainer">
                            <h2 className="title">{item.title}</h2>
                            <p className="desc">{item.desc}</p>
                            <button className="info-btn">SHOP NOW</button>
                        </div>
                    </div>
                    )
                     })
                }
                </Wpapper>
                <div direction="right"  className="arrow arrow-right" onClick={() => handleClick("right")}>
                    <MdKeyboardArrowRight />
                </div>
        </div>
    )
}

export default Slider;
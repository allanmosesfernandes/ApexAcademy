import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StyledSlider, SliderDiv } from './slider.styles';

const SliderReviews = () => {
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <Slider {...settings}>
      <SliderDiv>
        <p>
            Lorem
        </p>
      </SliderDiv>
      <SliderDiv>
        <h3>2</h3>
      </SliderDiv>
      <SliderDiv>
        <h3>3</h3>
      </SliderDiv>
      <SliderDiv>
        <h3>4</h3>
      </SliderDiv>
      <SliderDiv>
        <h3>5</h3>
      </SliderDiv>
      <SliderDiv>
        <h3>6</h3>
      </SliderDiv>
    </Slider>
  )
}

export default SliderReviews
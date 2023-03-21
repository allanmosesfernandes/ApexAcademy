import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StyledSlider, SliderDiv } from './slider.styles';
import { ReviewContent } from '../Testimonials/testimonials.styles';
import  Review1 from "../../assets/images/testimonials/review-one.svg";
import  Review2 from "../../assets/images/testimonials/review-two.svg";
import  Review3 from "../../assets/images/testimonials/review-three.svg";
import  Review4 from "../../assets/images/testimonials/review-four.svg";
import  Review5 from "../../assets/images/testimonials/review-five.svg";
import  Review6 from "../../assets/images/testimonials/review-six.svg";
import  Review7 from "../../assets/images/testimonials/review-seven.svg";
import  Review8 from "../../assets/images/testimonials/review-eight.svg";
import  Review9 from "../../assets/images/testimonials/review-nine.svg";


const SliderReviews = () => {
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
        responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Aarav Sharma - FYJC Bcom</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review2}></img>
        <p className='student__name'>Priya Patel - SYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review3}></img>
        <p>Sarah Taylore</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review4}></img>
        <p>Rohit Nair</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review5}></img>
        <p>Anjali Desai</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review6}></img>
        <p>Suresh Kumar</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review7}></img>
        <p>Ritu Malhotra</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review8}></img>
        <p>Nikhil Reddy</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review9}></img>
        <p>Arjun Singh</p>
        
        </ReviewContent>
      </SliderDiv>

    </Slider>
  )
}

export default SliderReviews
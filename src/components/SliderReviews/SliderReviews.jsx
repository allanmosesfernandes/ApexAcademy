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
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p className='student__name'>Sarah Taylore</p>
        <p className='student__class'>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nam tempora debitis assumenda eius voluptates ut aspernatur alias, veritatis, temporibus aut similique perferendis modi dolorum corporis doloribus repellat tempore.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Sarah Taylore</p>
        <p>FYJC BCOM</p>
        </ReviewContent>
      </SliderDiv>

    </Slider>
  )
}

export default SliderReviews
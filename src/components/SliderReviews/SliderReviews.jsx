import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
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
  autoplay: true,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
  return (
    <Slider {...settings}>
      <SliderDiv>
        <ReviewContent>
        <p>
          Best academy for commerce. The faculty here helps me understand each and every concept in a better way . Personal attention to each student is given by the teachers . The teaching techniques are amazing. The teachers are very helpful and are always available for any kind of doubt solving .
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review1}></img>
        <p>Vidhi Kokate</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Faculty is very good here. The way they teach their students is very unique. They explain each and every point. My experience has been very good while studying here. I am happy to be the part of this centre.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review2}></img>
        <p className='student__name'>Gurucharan Gupta</p>
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
         One of the best classes for Accounting and Finance. Here the student get to learn more about the topics, tips and tricks to solve the sums. Each and every doubt is cleared by the professors with utmost patience. Thanks for helping me in overcoming my fear in accounting :)
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review3}></img>
        <p>Sushmita Maji</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          Can't express in words the way of teaching is perfect the faculty is awesome in depth conceptual really excellent place to learn about accounting and finance.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review4}></img>
        <p>siddhant jadhav</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          This is the first time I have attended a class in this format and wondered how effective it would be. It was very effective. The instructor was very knowlegeable and provided a wealth of information about the current version, especially since the last version I used was several releases ago.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review5}></img>
        <p>Ashish Rawat</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          It's an ideal place for nurturing our knowledge about accounting & finance - but it's not the only thing, their exceptional faculty makes the experience more than better. Conceptual teaching is the key factor of this academy. Conclusively, Apex Academy is one of the best classes you can enroll into!🌻
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review6}></img>
        <p>Aditi Adulkar</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          This is my personal experience the creative teaching techniques of the faculty is quite impressive must say like no one other. And mainly for accounting subjects in commerce stream is up to the mark.
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review7}></img>
        <p>Simran Gomes</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          One of the reasons I’m attracted to this institution is because of your obvious willingness and creativity. This shows a true respect for your students, and I find that admirable.❤️
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review8}></img>
        <p>Kamal Mondal</p>
        
        </ReviewContent>
      </SliderDiv>
      <SliderDiv>
        <ReviewContent>
        <p>
          A great academy for finance and accounting , top learning with great faculty
        </p>
        <span>⭐⭐⭐⭐⭐</span>
        <img src={Review9}></img>
        <p>Rohit Maji</p>
        
        </ReviewContent>
      </SliderDiv>

    </Slider>
  )
}

export default SliderReviews
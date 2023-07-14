import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Pexel from '../../assets/images/apex-class.jpg'
import ApexClass from '../../assets/images/about/about01.jpeg'
import ApexClass2 from '../../assets/images/about/about02.jpg'
import ApexClass3 from '../../assets/images/about/about03.jpg'
import styled from 'styled-components'


const AboutSlider = () => {
  const AboutWrapper = styled.div`
  `
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
      <AboutWrapper>
          <Slider {...settings}>
              <img src={Pexel} alt='pexel' />
              <img src={ApexClass} alt='apex-class' />
              <img src={ApexClass2} alt='apex-class' />
              <img src={ApexClass3} alt='apex-class' />
          </Slider>
      </AboutWrapper>
  )
}

export default AboutSlider

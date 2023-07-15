import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Pexel from '../../assets/images/apex-class.jpg'
import ApexAbout1 from '../../assets/images/about/1.jpeg'
import ApexAbout2 from '../../assets/images/about/2.jpg'
import ApexAbout3 from '../../assets/images/about/3.jpeg'
import ApexAbout5 from '../../assets/images/about/5.png'
import ApexAbout6 from '../../assets/images/about/6.jpg'
// import ApexClass from '../../assets/images/about/about01.jpeg'
// import ApexClass2 from '../../assets/images/about/about02.jpg'
// import ApexClass3 from '../../assets/images/about/about03.jpg'
import styled from 'styled-components'

const AboutSlider = () => {
  const AboutWrapper = styled.div``
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <AboutWrapper>
      <Slider {...settings}>
        <img src={ApexAbout1} alt='Apex About 1' />
        <img src={ApexAbout2} alt='Apex About 2' />
        <img src={ApexAbout3} alt='Apex About 3' />
        <img src={ApexAbout5} alt='Apex About 5' />
        <img src={ApexAbout6} alt='Apex About 6' />
      </Slider>
    </AboutWrapper>
  )
}

export default AboutSlider

import React from 'react'
import { ToppersCard, ToppersCardContainer } from './toppersStyled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import topperImage1 from '../../assets/images/Toppers/topper-1.png'
import topperImage2 from '../../assets/images/Toppers/topper-2.png'
import topperImage3 from '../../assets/images/Toppers/topper-3.png'
import topperImage4 from '../../assets/images/Toppers/topper-4.png'
import topperImage5 from '../../assets/images/Toppers/topper-5.png'

import { HiOutlineAcademicCap as CapIcon } from 'react-icons/hi'
import { HiOutlineLibrary as College } from 'react-icons/hi'

const ToppersSlider = () => {
const ToppersArray = [
    {
      name: 'Jonathan Creado',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.20/10',
      imageID: 3,
    },
    {
      name: 'Chris Fernandes',
      classes: 'TYBAF',
      college: 'L.S Raheja College',
      scoreTitle: 'CGPA',
      score: '9.55/10',
      imageID: 2,
    },
    {
      name: 'Sushmita Maji',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.70/10',
      imageID: 5,
    },
    {
      name: 'Simran Gomes',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.85/10',
      imageID: 1,
    },
    {
      name: 'Simran Gomes',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.85/10',
      imageID: 1,
    },
    {
      name: 'Simran Gomes',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.85/10',
      imageID: 1,
    },
    {
      name: 'Jonathan Creado',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.20/10',
      imageID: 3,
    },
    {
      name: 'Chris Fernandes',
      classes: 'TYBAF',
      college: 'L.S Raheja College',
      scoreTitle: 'CGPA',
      score: '9.55/10',
      imageID: 2,
    },
    {
      name: 'Sushmita Maji',
      classes: 'TYBAF',
      college: 'MMK College',
      scoreTitle: 'CGPA',
      score: '9.70/10',
      imageID: 5,
    },
  ]

  const imageMap = {
    1: topperImage1,
    2: topperImage2,
    3: topperImage3,
    4: topperImage4,
    5: topperImage5,
  }
const settings = {
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
    <>
      <Slider {...settings}>
    {ToppersArray.map((top, index) => {
          const { name, classes, college, scoreTitle, score, imageID } = top
          const imagePath = imageMap[imageID]

          return (
            <ToppersCard key={index}>
              <img src={imagePath} alt='topper image' />
              <div className='second'>
                <div>
                  <CapIcon className='cap' /> {classes}
                </div>
                <div>
                  <College className='college' />
                  {college}
                </div>
              </div>
              <div className='third'>
                <h3>{score}</h3>
                <p>{scoreTitle}</p>
                <h4>{name}</h4>
              </div>
            </ToppersCard>
          )
        })} 
      </Slider>
    </>
  )
}

export default ToppersSlider

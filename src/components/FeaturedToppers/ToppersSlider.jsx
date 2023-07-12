import React from 'react'
import { ToppersCard, ToppersCardContainer } from './toppersStyled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import topperImage1 from '../../assets/images/Toppers/top/Abhijit Sasmal.png'
import topperImage2 from '../../assets/images/Toppers/topper-2.png'
import topperImage3 from '../../assets/images/Toppers/top/Suraj Samanta.JPG'
import topperImage4 from '../../assets/images/Toppers/top/Esha.JPG'
import topperImage5 from '../../assets/images/Toppers/top/Abhijeet Jadhav.JPG'
import topperImage6 from '../../assets/images/Toppers/top/Simran Gomes.jpg'
import topperImage7 from '../../assets/images/Toppers/top/Pranay More.JPG'
import topperImage8 from '../../assets/images/Toppers/top/Chris.JPG'
import topperImage9 from '../../assets/images/Toppers/top/Jonathan Creado.jpg'
// import topperImage10 from '../../assets/images/Toppers/top/Pranay More.JPG'

import { HiOutlineAcademicCap as CapIcon } from 'react-icons/hi'
import { HiOutlineLibrary as College } from 'react-icons/hi'

const ToppersSlider = () => {
const ToppersArray = [
  {
    name: 'Abhijit Sasmal',
    classes: 'SYJC',
    score: '90%',
    imageID: 1,
  },
  // {
  //   name: 'Aditi Adulkar',
  //   classes: 'SYJC',
  //   // college: 'L.S Raheja College',
  //   // scoreTitle: 'CGPA',
  //   score: '89%',
  //   imageID: 2,
  // },
  {
    name: 'Suraj Samanta',
    classes: 'SYJC',
    // college: 'MMK College',
    // scoreTitle: 'CGPA',
    score: '88%',
    imageID: 3,
  },
  {
    name: 'Esha Mohite',
    classes: 'FYBAF',
    // college: 'MMK College',
    // scoreTitle: 'CGPA',
    score: '92%',
    imageID: 4,
  },
  {
    name: 'Abhijeet Jadhav',
    classes: 'FYBAF',
    // college: 'MMK College',
    // scoreTitle: 'CGPA',
    score: '87%',
    imageID: 5,
  },
  {
    name: 'Simran Gomes',
    classes: 'TYBAF',
    // college: 'MMK College',
    // scoreTitle: 'CGPA',
    score: '91%',
    imageID: 6,
  },
  {
    name: 'Pranay More',
    classes: 'SYBAF',
    // college: 'MMK College',
    // scoreTitle: 'CGPA',
    score: '88%',
    imageID: 7,
  },
  {
    name: 'Chris Fernandes',
    classes: 'SYBAF',
    // college: 'L.S Raheja College',
    // scoreTitle: 'CGPA',
    score: '86%',
    imageID: 8,
  },
  {
    name: 'Jonathan Creado',
    classes: 'SYBAF',
    // college: 'MMK College',
    // scoreTitle: 'CGPA',
    score: '83%',
    imageID: 9,
  },
  // {
  //   name: 'Juan Mendes',
  //   classes: 'FYJC',
  //   // college: 'MMK College',
  //   // scoreTitle: 'CGPA',
  //   score: '81%',
  //   imageID: 5,
  // },
]

  const imageMap = {
    1: topperImage1,
    2: topperImage2,
    3: topperImage3,
    4: topperImage4,
    5: topperImage5,
    6: topperImage6,
    7: topperImage7,
    8: topperImage8,
    9: topperImage9
  }
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,

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
      {
        ToppersArray.map((top, index) => {
            const { name, classes, college, scoreTitle, score, imageID } = top
            const imagePath = imageMap[imageID]
            return (
              <ToppersCard key={index}>
                <div className='wreather'>
                  <img src={imagePath} alt='topper image' />
                  <div className="wreather-bg"></div>
                </div>
                <div className='second'>
                  <p>{name}</p>
                </div>
                <div className='third'>
                  <h3>{score}</h3>
                  <p>{classes}</p>
                </div>
              </ToppersCard>
            )
          })
        } 
      </Slider>
    </>
  )
}

export default ToppersSlider

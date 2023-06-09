import React from 'react'
import Container from '../styles/container.stylesheet'
import {
  FirstFoldContainer,
  FirstFoldLeftDiv,
  FirstFoldRight,
  YellowCircleImage,
  BodyCopy,
} from './FirstFold.styles'
import Rocket from '../../assets/images/rocket.png'
import CircleSVG from '../../assets/images/circle.svg'
import { RocketImg } from './FirstFold.styles'
import Lottie from 'lottie-react'
import groovy from '../../assets/images/animation.json'
import Buttons from '../Buttons/Buttons'
import ExploreCourses from '../ExploreCourses/ExploreCourses'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Vision from '../Vision/Vision'
import Values from '../Values/Values'
import { ArrowButton } from '../Buttons/buttons.styles'
import Toppers from '../FeaturedToppers/Toppers'
import { useNavigate } from 'react-router-dom'

const FirstFold = () => {
  const navigate = useNavigate()

  const EnquiryHandler = () => {
    console.log('object')
    navigate('/contact')
  }
  return (
    <>
      <Container>
        <FirstFoldContainer>
          <FirstFoldLeftDiv>
            <h2>
              Launch your academic <br />
            </h2>
            <div>
              <YellowCircleImage>
                success <RocketImg src={Rocket} />
              </YellowCircleImage>
            </div>
            <div>
              <BodyCopy>
                Join Apex Learning Academy for the best commerce education at an
                affordable cost. Our experienced instructors and innovative
                learning approach will equip you with the skills and knowledge
                to succeed in your career.
              </BodyCopy>
              {/* <Buttons></Buttons> */}
              <ArrowButton onClick={EnquiryHandler}>
                Unlock Your Potential
              </ArrowButton>
            </div>
          </FirstFoldLeftDiv>
          <FirstFoldRight>
            <Lottie animationData={groovy} loop={true} className='lottie1' />
          </FirstFoldRight>
        </FirstFoldContainer>
        <Toppers />
      </Container>
      <ExploreCourses />
      <Values />
      <Testimonials />
      <Vision />
      <Contact />
    </>
  )
}

export default FirstFold

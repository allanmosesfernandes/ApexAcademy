import React from 'react'
import Container from '../styles/container.stylesheet'

import {
  AboutWrapper,
  AboutImageText,
  AboutStoryContainer,
  Story,
  TextPiece,
  SentiImage,
} from './about-styles'
import Pexel from '../../assets/images/apex-class.jpg'
import Senti from '../../assets/images/about/ganesh.jpg'
import AboutSlider from './AboutSlider'
const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <h2>APEX Learning Academy</h2>
        <p>
          <span className='blue-emphasis'>A</span>chieving{' '}
          <span className='blue-emphasis'>P</span>roficiency and{' '}
          <span className='blue-emphasis'>EX</span>cellence in Commerce
          Education.
        </p>
        <AboutImageText>
          {/* <img src={Pexel} alt='Vertical Student' /> */}
          <AboutSlider />
          <p>
            Welcome to{' '}
            <span className='blue-emphasis'>Apex Learning Academy</span>, where
            we believe in the power of education to transform lives. Founded by{' '}
            <span className='blue-emphasis'>Ganesh Shambhunath Maji</span>, our
            academy is dedicated to helping students achieve remarkable
            milestones in their academic results. With a teaching journey that
            began in 2017, we have successfully guided hundreds of students
            towards success.<br></br>
            <br></br> At Apex Learning Academy, we pride ourselves on our
            innovative and interactive teaching style, focusing on{' '}
            <span className='blue-emphasis'>conceptual understanding </span>{' '}
            rather than rote learning. Our aim is to provide quality education
            to every student, regardless of their financial background, at the most
            <span className='blue-emphasis'> affordable and nominal fees.</span>
          </p>
        </AboutImageText>
        <AboutStoryContainer>
          <Story className='a'>
            <h4>my story</h4>
          </Story>
          <TextPiece className='b'>
            <p>
              My name is{' '}
              <span className='blue-emphasis'>Ganesh Shambhunath Maji</span>,
              and I embarked on my teaching journey six years ago with a vision
              to revolutionize the way students learn. Starting as a home tutor,
              I witnessed a growing demand for my teaching expertise, which
              eventually led to the establishment of Apex Learning Academy. It
              was a significant achievement to launch my own coaching institute
              at the young age of 23, and I am grateful for the support and
              blessings of my family and friends. <br></br>
              <br></br>
              In terms of my academic qualifications, I completed my graduation
              from <span className='blue-emphasis'>Mumbai University</span> in
              2017. I further pursued a{' '}
              <span className='blue-emphasis'>
                Masters in Accountancy and Finance
              </span>{' '}
              from Delhi University (IGNOU). Additionally, I have studied at the
              Institute of Chartered Accountants of India, where I cleared the
              CA entrance exam on my{' '}
              <span className='blue-emphasis'>first attempt</span> and even
              obtained exemptions in three subjects in my{' '}
              <span className='blue-emphasis'>IPCC exam.</span> Currently, I am
              a <span className='blue-emphasis'>CA finalist</span> with just one
              group remaining. Moreover, I have also studied at the
              <span className='blue-emphasis'>CFA Institute (USA).</span>{' '}
              <br></br>
              <br></br>
              My journey in the corporate sector included working with a
              renowned multinational corporation,{' '}
              <span className='blue-emphasis'>Hindustan Unilever Ltd</span>,
              since 2019. This experience has provided me with valuable insights
              into the industry practices and has shaped my teaching
              methodology. At Apex Learning Academy, I strive to bridge the gap
              <span className='blue-emphasis'>
                between theory and practice
              </span>{' '}
              by incorporating real-world examples and the best practices
              observed in the finance field.<br></br>
              <br></br>
              Throughout my academic life, I consistently ranked among the{' '}
              <span className='blue-emphasis'>top three merit students</span>.
              In my HSC exams in 2014, I achieved an impressive score of
              <span className='blue-emphasis'> 98 marks</span> in Accounts. I
              want to share my experiences, knowledge, and expertise with the
              youth, empowering them to achieve their academic and financial
              goals.<br></br>
              <br></br>
              Join us at Apex Learning Academy and embark on a transformative
              educational journey. Discover the joy of learning through our
              conceptual teaching approach and practical industry insights.
              Together, let's unlock your true potential and pave the way for
              your <span className='blue-emphasis'>future success</span>.
            </p>
          </TextPiece>
          <SentiImage className='c' src={Senti} alt='Senti' />
        </AboutStoryContainer>
      </AboutWrapper>
    </Container>
  )
}

export default About

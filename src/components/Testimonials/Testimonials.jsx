import React from 'react'
import Container from '../styles/container.stylesheet'
import { TestimonialDiv } from './testimonials.styles'
import SliderReviews from '../SliderReviews/SliderReviews'


const Testimonials = () => {
  return (
    <Container>
      
      <TestimonialDiv>
        <h2>Testimonials </h2>
        <p>See what our students say</p>
        <SliderReviews />
      </TestimonialDiv>
    </Container>
  )
}

export default Testimonials

import React from 'react'
import Container from '../styles/container.stylesheet'
import { TestimonialDiv } from './testimonials.styles'
import SliderReviews from '../SliderReviews/SliderReviews'


const Testimonials = () => {
  return (
    <Container>
      
      <TestimonialDiv>
        <h2>Testimonials </h2>
        <p>Our students are at the heart of everything we do, and their success is our top priority. We are committed to providing them with an exceptional learning experience that prepares them for a bright future. But don't just take our word for it.</p>
        <SliderReviews />
      </TestimonialDiv>
    </Container>
  )
}

export default Testimonials

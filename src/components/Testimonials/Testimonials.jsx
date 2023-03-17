import React from 'react'
import Container from '../styles/container.stylesheet'
import { TestimonialDiv } from './testimonials.styles'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  return (
    <Container>
        <h2>Testimonials </h2>
        <TestimonialDiv>

        <p>See what our students say</p>
        </TestimonialDiv>

    </Container>
  )
}

export default Testimonials
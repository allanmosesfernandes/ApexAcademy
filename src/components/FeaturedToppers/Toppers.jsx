import React from 'react'
import { ToppersContainer } from './toppersStyled'
import ToppersSlider from './ToppersSlider'
const Toppers = () => {
  return (
    <ToppersContainer>
      <h2>Featured Toppers</h2>
      <p>
        At Apex Learning Academy, we are incredibly proud of our students'
        achievements. They have worked hard, guided by our expert faculty, to
        achieve great success. Introducing our Featured Toppers, a group of
        exceptional individuals who showcase the unwavering efforts of our
        academy.
      </p>
      <ToppersSlider />
    </ToppersContainer>
  )
}

export default Toppers
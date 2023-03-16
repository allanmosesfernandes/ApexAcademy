import React from 'react'
import { Container } from '../styles/container.stylesheet'
import { FirstFoldContainer, FirstFoldLeftDiv, FirstFoldRight, YellowCircleImage } from './FirstFold.styles'
import Rocket from "../../assets/images/rocket.png"
import CircleSVG from "../../assets/images/circle.svg"
import { RocketImg } from './FirstFold.styles'
import  Grads  from "../../assets/images/hero.png";
import Lottie from "lottie-react";
import groovy from "../../assets/images/animation.json"

const FirstFold = () => {
  return (
    <Container>
        <FirstFoldContainer>
          <FirstFoldLeftDiv>
          <h2>Your path to,<br />academic <br /></h2>
          <div>
            <YellowCircleImage src={CircleSVG} />
            <h2>excellence  <RocketImg src={Rocket} /></h2>
          </div>
          
          </FirstFoldLeftDiv>
          <FirstFoldRight>
            <Lottie animationData={groovy} loop={true} />
          </FirstFoldRight>
        </FirstFoldContainer>
    </Container>
  )
}

export default FirstFold
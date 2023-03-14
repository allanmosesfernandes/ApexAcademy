import React from 'react'
import { Container } from '../styles/container.stylesheet'
import { FirstFoldContainer, FirstFoldLeftDiv, RocketGIF, YellowCircleImage } from './FirstFold.styles'
import Rocket from "../../assets/images/rocket.png"
import CircleSVG from "../../assets/images/circle.svg"
import { RocketImg } from './FirstFold.styles'
import  Grads  from "../../assets/images/grads.png";
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
          <div className="first-fold-right">
            <img src={Grads} alt=""/>
          </div>
        </FirstFoldContainer>
    </Container>
  )
}

export default FirstFold
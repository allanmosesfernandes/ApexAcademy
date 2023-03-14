import React from 'react'
import { Container } from '../styles/container.stylesheet'
import { FirstFoldContainer, FirstFoldLeftDiv, RocketGIF } from './FirstFold.styles'
import Rocket from "../../assets/images/rocketGIF.gif"


const FirstFold = () => {
  return (
    <Container>
        <FirstFoldContainer>
          <FirstFoldLeftDiv>
          <h2>Your path to,<br />academic <br />excellence</h2>
          </FirstFoldLeftDiv>

        </FirstFoldContainer>
    </Container>
  )
}

export default FirstFold
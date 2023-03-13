import React from 'react'
import { StyledHeader } from './header.styles'
import { Container } from '../styles/container.stylesheet'
import GraduationCap from "../../assets/images/Grad.png";

const Header = () => {
  return (
    <StyledHeader>
        <nav>
            <Container>
            <h2>Apex Academy <img src={GraduationCap} alt="Graduation Cap"/></h2>

            </Container>
        </nav>
    </StyledHeader>
  )
}

export default Header
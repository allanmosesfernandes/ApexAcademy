import React from 'react'
import { StyledHeader } from './header.styles'
import { Container } from '../styles/container.stylesheet'
import GraduationCap from "../../assets/images/Grad.png";
import ApexLogo from "../../assets/images/apex_logo.png";

const Header = () => {
  return (
    <StyledHeader>
    <nav>
    <Container>
    <h2><span>Apex</span> Academy</h2>
    </Container>
    </nav>
    </StyledHeader>
  )
}

export default Header
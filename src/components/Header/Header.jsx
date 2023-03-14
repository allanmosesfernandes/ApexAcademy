import React from 'react'
import { StyledHeader, LinksRIght } from './header.styles'
import { Container } from '../styles/container.stylesheet'
import GraduationCap from "../../assets/images/Grad.png";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <StyledHeader>
    <Container>
        <nav>
        <h2>
            <Link to="/"><span>Apex </span> Academy</Link>
        </h2>
        <LinksRIght>
        <Link to="/">About</Link>

        </LinksRIght>
        </nav>
    </Container>

    </StyledHeader>
  )
}

export default Header
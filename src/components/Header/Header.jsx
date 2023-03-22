import React from 'react'
import { StyledHeader, LinksRIght } from './header.styles'
import  Container  from '../styles/container.stylesheet'
import GraduationCap from "../../assets/images/Grad.png";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Container>
    <StyledHeader>
        <nav>
        <h2>
            <Link to="/"><span>Apex Academy</span> </Link>
        </h2>
        <LinksRIght>
            <Link to="/">About</Link>
            <Link to="/">Pricing</Link>
        </LinksRIght>
        </nav>

    </StyledHeader>
    </Container>

  )
}

export default Header
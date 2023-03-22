import React from 'react'
import { StyledFooter,StyledFooterLinks } from './footer-styles';
import Container from '../styles/container.stylesheet';
import ApexLogo from "../../assets/images/GG.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
        <Container>
            <h2>Apex Academy</h2>
            <StyledFooterLinks>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </StyledFooterLinks>
        </Container>
    </StyledFooter>
  )
}

export default Footer
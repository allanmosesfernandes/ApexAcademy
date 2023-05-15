import React from 'react'
import { StyledFooter,StyledFooterLinks, Initials, CreatedBy, FooterLine, StyledFooterLinksBordered } from './footer-styles';
import Container from '../styles/container.stylesheet';
import { Link } from 'react-router-dom';
import WhatsApp from "../../assets/images/Footer/whatsapp.svg";
import Call from "../../assets/images/Footer/phone-circle.svg";
import Insta from "../../assets/images/Footer/instagram.svg";
import AF from "../../assets/images/logo-final.png";
import Star from "../../assets/images/Footer/star.svg"
const Footer = () => {
    let currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
        <Container>
            <FooterLine>
            <h3>Apex Academy</h3>
            <StyledFooterLinks>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="pricing">Pricing</Link>
            </StyledFooterLinks>
            </FooterLine>

            <StyledFooterLinksBordered>
                <Link to="https://wa.me/919619303386">
                    <img src={WhatsApp} alt="Whatsapp Logo"/>
                </Link>
                <Link to="https://www.instagram.com/its_ganeshm_12/">
                        <img src={Insta} alt="Instagram Logo"/>
                </Link>
                <Link to="tel:+918591829604">
                    <img src={Call} alt="Contact"/>
                </Link>
            </StyledFooterLinksBordered>
            <CreatedBy>
                <p> Created with ❤️ by  </p>
                <p>
                <Link to="https://allanfernandes.dev/">
                    <Initials src={AF} alt="Allan Moses Fernandes Logo" />
                </Link>
                </p>
                <p>
                    {currentYear}  © All rights reserved.
                </p>
            </CreatedBy>
        </Container>
    </StyledFooter>
  )
}

export default Footer
import React from 'react'
import { StyledFooter,StyledFooterLinks } from './footer-styles';
import Container from '../styles/container.stylesheet';
import { Link } from 'react-router-dom';
import WhatsApp from "../../assets/images/Footer/whatsapp.svg";
import Call from "../../assets/images/Footer/phone-circle.svg";
import Insta from "../../assets/images/Footer/instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
        <Container>
            <h2>Apex Academy</h2>
            <StyledFooterLinks>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Courses</Link>
            </StyledFooterLinks>
            <StyledFooterLinks>
                <Link to="https://wa.me/919619303386">
                    <img src={WhatsApp} alt="Whatsapp Logo"/>
                </Link>
                <Link to="https://www.instagram.com/its_ganeshm_12/">
                        <img src={Insta} alt="Instagram Logo"/>
                </Link>
                <Link to="tel:+918591829604">
                    <img src={Call} alt="Contact Pin"/>
                </Link>

            </StyledFooterLinks>
        </Container>
    </StyledFooter>
  )
}

export default Footer
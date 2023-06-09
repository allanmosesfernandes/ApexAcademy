import React from 'react'
import {
  StyledFooter,
  StyledFooterLinks,
  Initials,
  CreatedBy,
  FooterLine,
  StyledFooterLinksBordered,
} from './footer-styles'
import Container from '../styles/container.stylesheet'
import { Link } from 'react-router-dom'
import WhatsApp from '../../assets/images/Footer/whatsapp.svg'
import Call from '../../assets/images/Footer/phone-circle.svg'
import Insta from '../../assets/images/Footer/instagram.svg'
import AF from '../../assets/images/logo-final.png'
import Star from '../../assets/images/Footer/star.svg'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledFooter>
      <Container>
        <FooterLine>
          <h3>
            <Link to='/' onClick={scrollToTop}>
              Apex Learning Academy
            </Link>
          </h3>
          <StyledFooterLinks>
            <Link to='/' onClick={scrollToTop}>
              Home
            </Link>
            <Link to='about' onClick={scrollToTop}>
              About
            </Link>
            <Link to='contact' onClick={scrollToTop}>
              Contact
            </Link>
            {/* <Link to="pricing">Pricing</Link> */}
          </StyledFooterLinks>
        </FooterLine>

        <StyledFooterLinksBordered>
          <Link to='https://wa.link/msu4y1'>
            <img src={WhatsApp} alt='Whatsapp Logo' />
          </Link>
          <Link to='https://www.instagram.com/apexlearningacademy/'>
            <img src={Insta} alt='Instagram Logo' />
          </Link>
          <Link to='tel:+918591829604'>
            <img src={Call} alt='Contact' />
          </Link>
        </StyledFooterLinksBordered>
        <CreatedBy>
          <p> Created with ❤️ by </p>
          <p>
            <Link to='https://allanfernandes.dev/'>
              <Initials src={AF} alt='Allan Moses Fernandes Logo' />
            </Link>
          </p>
          <p>
            Apex Learning Academy <br />© {currentYear}
             &nbsp;All rights reserved.
          </p>
        </CreatedBy>
      </Container>
    </StyledFooter>
  )
}

export default Footer

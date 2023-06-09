import React from 'react'
import Container from '../styles/container.stylesheet'
import { ContactSection, ContactLeft, ContactRight } from './contact.styles';
import AddressSVG from "../../assets/images/Contact/location_pin.svg";
import Whatsapp from "../../assets/images/Contact/whatsapp.svg";
import Instagram from "../../assets/images/Contact/instagram.svg";
import { Link } from 'react-router-dom';
import PhoneCircle from "../../assets/images/Contact/phone-circle.svg";
import HeroImg from "../../assets/images/hero.png";

const Contact = () => {
  return (
    <Container>
      <ContactSection>
        <ContactLeft>
          <h2>Get in touch</h2>
          <img src={HeroImg} alt='Contact' />
        </ContactLeft>
        <ContactRight>
          <div className='contact__block'>
            <Link to='https://goo.gl/maps/kSWe1kddnV7F5es27'>
              <img src={AddressSVG} alt='Address Pin' />
            </Link>
            <div className='contact__contents'>
              <Link to='https://goo.gl/maps/kSWe1kddnV7F5es27'>
                <h3>Address</h3>
              </Link>

              <p>
                Mumbai
                <br />
                A1 coelho society, opposite Hare Krishna Supermarket, <br />Mumbai,
                Maharashtra 400049, India
              </p>
            </div>
          </div>
          <div className='contact__block'>
            <Link to='tel:+918591829604'>
              <img src={PhoneCircle} alt='Contact Pin' />
            </Link>

            <div className='contact__contents'>
              <h3>Phone</h3>
              <p>+91 8591829604</p>
              <p>+91 9619352835</p>
            </div>
          </div>
          <div className='contact__block'>
            <Link to='https://wa.me/919619303386'>
              <img src={Whatsapp} alt='Whatsapp Logo' />
            </Link>

            <div className='contact__contents'>
              <h3>Query</h3>
              <p>
                Send us a message on Whatsapp <br /> and our team will get in
                touch with you!
              </p>
            </div>
          </div>
          <div className='contact__block'>
            <Link to='https://www.instagram.com/its_ganeshm_12/'>
              <img src={Instagram} alt='Instagram Logo' />
            </Link>
            <div className='contact__contents'>
              <h3>
                <Link to='https://www.instagram.com/its_ganeshm_12/'>
                  Socials
                </Link>
              </h3>
              <p>Follow us on Instagram!</p>
            </div>
          </div>
        </ContactRight>
      </ContactSection>
    </Container>
  )
}

export default Contact
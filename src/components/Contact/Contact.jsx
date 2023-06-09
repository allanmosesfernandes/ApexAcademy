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
                A1 coelho society, opposite Hare Krishna Supermarket, <br />
                Mumbai, Maharashtra 400049, <br />India.
              </p>
            </div>
          </div>
          <div className='contact__block'>
            <Link to='tel:+918591829604'>
              <img src={PhoneCircle} alt='Contact Pin' />
            </Link>

            <div className='contact__contents'>
              <h3>Phone</h3>
              <Link to='tel:+918591829604'>8591829604</Link><br />
              <Link to='tel:+919619352835'>9619352835</Link>
            </div>
          </div>
          <div className='contact__block'>
            <Link to='https://wa.link/msu4y1'>
              <img src={Whatsapp} alt='Whatsapp Logo' />
            </Link>

            <div className='contact__contents'>
              <h3>Query</h3>
              <p>
                Send us a message on
                <Link to='https://wa.link/msu4y1'> Whatsapp </Link>
                <br /> and our team will get in touch with you!
              </p>
            </div>
          </div>
          <div className='contact__block'>
            <Link to='https://www.instagram.com/apexlearningacademy/'>
              <img src={Instagram} alt='Instagram Logo' />
            </Link>
            <div className='contact__contents'>
              <h3>
                  Socials
              </h3>
              <p>
                Follow us on{' '}
                <Link to='https://www.instagram.com/apexlearningacademy/'>
                  Instagram!
                </Link>
              </p>
            </div>
          </div>
        </ContactRight>
      </ContactSection>
    </Container>
  )
}

export default Contact
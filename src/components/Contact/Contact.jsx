import React from 'react'
import Container from '../styles/container.stylesheet'
import { ContactSection, Contact__Left, Contact__Right } from './contact.styles';
import AddressSVG from "../../assets/images/Contact/location_pin.svg";
import CallSVG from "../../assets/images/Contact/call.svg";
import ThumbSVG from "../../assets/images/Contact/thumbs.svg";
import Whatsapp from "../../assets/images/Contact/whatsapp.svg";
import Instagram from "../../assets/images/Contact/instagram.svg";
import { Link } from 'react-router-dom';
import PhoneCircle from "../../assets/images/Contact/phone-circle.svg"
const Contact = () => {
  return (
    <Container>
        <ContactSection>
            <Contact__Left>
                <h2>Get in touch</h2>
                <div className="pattern-bg">
                    
                </div>
            </Contact__Left>
            <Contact__Right>
                <div className="contact__block">
                    <Link to="https://goo.gl/maps/kSWe1kddnV7F5es27">
                        <img src={AddressSVG} alt="Address Pin"/>
                    </Link>
                    <div className="contact__contents">
                        <Link to="https://goo.gl/maps/kSWe1kddnV7F5es27">
                            <h3>Address</h3>
                        </Link>
                        
                        <p>
                            Mumbai<br />
                            Room #5, Coelho Chawl Juhu <br />
                            Santacruz West 400049
                        </p>
                    </div>
                </div>
                <div className="contact__block">
                    <Link to="tel:+918591829604">
                        <img src={PhoneCircle} alt="Contact Pin"/>
                    </Link>

                    <div className="contact__contents">
                        <h3>Phone</h3>
                        <p>+91 8591829604</p>
                    </div>
                </div>
                <div className="contact__block">
                    <Link to="https://wa.me/919619303386">
                        <img src={Whatsapp} alt="Whatsapp Logo"/>
                    </Link>

                    <div className="contact__contents">
                        <h3>Query</h3>
                        <p>
                           Send us a message on Whatsapp <br/> and our team will get in touch with you!
                        </p>
                    </div>
                </div>
                <div className="contact__block">
                    <Link to="https://www.instagram.com/its_ganeshm_12/">
                        <img src={Instagram} alt="Instagram Logo"/>
                    </Link>
                    <div className="contact__contents">
                        <h3>
                            <Link to="https://www.instagram.com/its_ganeshm_12/">Socials</Link>
                        </h3>
                        <p>
                           Follow us on Instagram!
                        </p>
                    </div>
                </div>
            </Contact__Right>
        </ContactSection>

    </Container>
  )
}

export default Contact
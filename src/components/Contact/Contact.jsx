import React from 'react'
import Container from '../styles/container.stylesheet'
import { ContactSection, Contact__Left, Contact__Right } from './contact.styles';
import AddressSVG from "../../assets/images/Contact/location-pin.svg";
import CallSVG from "../../assets/images/Contact/call.svg";
import ThumbSVG from "../../assets/images/Contact/thumbs.svg";

const Contact = () => {
  return (
    <Container>
        <ContactSection>
            <Contact__Left>
                <h2>Get in touch</h2>
            </Contact__Left>
            <Contact__Right>
                <div className="contact__block">
                    <img src={AddressSVG} alt="Address Pin"/>
                    <div className="contact__contents">
                        <h3>Address</h3>
                        <p>
                            Mumbai<br />
                            Room #5, Coelho Chawl Juhu <br />
                            Santacruz West 400049
                        </p>
                    </div>
                </div>
                <div className="contact__block">
                    <img src={CallSVG} alt="Address Pin"/>
                    <div className="contact__contents">
                        <h3>Phone</h3>
                        <p>+91 9384026784</p>
                    </div>
                </div>
                <div className="contact__block">
                    <img src={AddressSVG} alt="Address Pin"/>
                    <div className="contact__contents">
                        <h3>Query</h3>
                        <p>
                           Send us a message on Whatsapp <br/> and our team will get in touch with you!
                        </p>
                    </div>
                </div>
                <div className="contact__block">
                    <img src={ThumbSVG} alt="Address Pin"/>
                    <div className="contact__contents">
                        <h3>Socials</h3>
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
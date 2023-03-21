import React from 'react'
import Container from '../styles/container.stylesheet'
import { ContactSection, Contact__Left, Contact__Right } from './contact.styles';
import AddressSVG from "../../assets/images/Contact/location-pin.svg"
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
                            Room #5, Coelho Chawl Juhu
                        </p>
                    </div>
                </div>
                <div className="contact__block">
                    <img src={AddressSVG} alt="Address Pin"/>
                    <div className="contact__contents">
                        <h3>Address</h3>
                        <p>
                            Mumbai<br />
                            Room #5, Coelho Chawl Juhu
                        </p>
                    </div>
                </div>
                <div className="contact__block">
                    <img src={AddressSVG} alt="Address Pin"/>
                    <div className="contact__contents">
                        <h3>Address</h3>
                        <p>
                            Mumbai<br />
                            Room #5, Coelho Chawl Juhu
                        </p>
                    </div>
                </div>
            </Contact__Right>
        </ContactSection>

    </Container>
  )
}

export default Contact
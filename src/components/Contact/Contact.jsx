import React from 'react'
import Container from '../styles/container.stylesheet'
import { ContactSection, Contact__Left, Contact__Right } from './contact.styles'
const Contact = () => {
  return (
    <Container>
        <ContactSection>
            <Contact__Left>
                <h2>Get in touch</h2>
            </Contact__Left>
            <Contact__Right>
                <div className="contact__block">
                    <img></img>
                </div>
            </Contact__Right>
        </ContactSection>

    </Container>
  )
}

export default Contact
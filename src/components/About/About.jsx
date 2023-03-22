import React from 'react'
import Container from '../styles/container.stylesheet'
import { AboutWrapper, AboutImageText,AboutStoryContainer } from './about-styles'

import Pexel from "../../assets/images/pexel.jpg";
const About = () => {
  return (
    <Container>
        <AboutWrapper>
            <h2>
                Hello! Welcome to Apex.
            </h2>
            <p>
                We believe quality commerce education should be affordable.
            </p>
            <AboutImageText>
              <img src={Pexel} alt="Vertical Student" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minus perferendis esse animi enim nemo voluptas aspernatur illo magnam voluptates.
              </p>
            </AboutImageText>
            <AboutStoryContainer>

            </AboutStoryContainer>
        </AboutWrapper>
        
    </Container>
  )
}

export default About
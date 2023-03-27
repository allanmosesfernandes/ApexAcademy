import React from 'react'
import Container from '../styles/container.stylesheet'
import { AboutWrapper, AboutImageText,AboutStoryContainer,Story,TextPiece,SentiImage } from './about-styles'
import Pexel from "../../assets/images/pexel.jpg";
import Senti from "../../assets/images/senti.jpg";
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
                <Story className='a'>
                    <h4>Story</h4>
                </Story>
                <TextPiece className='b'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero architecto ipsa provident porro hic facere officiis, dignissimos eveniet labore.<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias neque quisquam recusandae eaque tenetur veniam tempore quis laboriosam corporis! <br />
                        Lorem ipsum dolor sit amet.
                    </p>

                </TextPiece>
                <SentiImage className='c' src={Senti} alt="Senti" />

            </AboutStoryContainer>
        </AboutWrapper>
        
    </Container>
  )
}

export default About
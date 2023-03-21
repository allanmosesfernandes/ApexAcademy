import React from 'react';
import Container from '../styles/container.stylesheet'
import { Vision_Block } from './vision.styles';
import MarqueeVision from '../Marquee/MarqueeVision.js'
const Vision = () => {
  return (
    <>
        <MarqueeVision />
            <Vision_Block>
                <h4>Revolutionize</h4>
                {/* <p></p> */}
            </Vision_Block>
    </>
  )
}

export default Vision
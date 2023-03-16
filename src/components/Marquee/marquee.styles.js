import styled from "styled-components";
import { motion } from 'framer-motion';


export const MarqueeContainer = styled.div`
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  height: 150px; /* set a fixed height */
  width: 100%; /* set a fixed width */
  position: relative;
  margin: 5rem 0;

  @media only screen and (max-width: 600px) {
    //code goes here
    height: 120px;
  }
`;

export const MarqueeStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Track = styled(motion.div)`
  position: relative; /* set position to relative */

  
`;

export const MarqueeText = styled.h1`
  margin: 20px 0;
  font-size: 8rem;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #FFE900;
  text-transform: uppercase;
  font-family: "Neue Bold";
  font-style: italic;
  white-space: nowrap; /* remove white-space property */
  @media only screen and (max-width: 600px) {
    //code goes here
    margin: 10px 0;
    font-size: 6rem;
  }
`;

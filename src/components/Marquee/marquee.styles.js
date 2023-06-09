import styled from "styled-components";
import { motion } from 'framer-motion';

export const MarqueeContainer = styled.div`

  height: 150px; /* set a fixed height */
  width: 100%; /* set a fixed width */
  position: relative;
  margin: 5rem 0;
  background: ${(props) => props.theme.primaryColor};
  @media only screen and (max-width: 600px) {
    //code goes here
    height: 120px;
  }
`;

export const MarqueeVisionContainer = styled(MarqueeContainer)`
margin: 8rem 0 0 0;
  background: ${(props) => props.theme.themeGreen};


`
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
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  text-transform: none;
  font-family: "Neue Bold";

  img {
    display: inline;
  }
  white-space: nowrap; /* remove white-space property */
  @media only screen and (max-width: 600px) {
    //code goes here
    margin: 10px 0;
    font-size: 6rem;
  }
`;



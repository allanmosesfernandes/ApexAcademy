import styled from "styled-components";
import { motion } from 'framer-motion';

export const MarqueeStyled = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 206px;
  overflow-x: hidden;
@media only screen and (max-width: 600px) {
  //code goes here
}
`

export const Track = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
`;

export const MarqueeText = styled.h1`
  margin: 20px 0;
  font-size: 8rem;
  font-family: Antonio;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #FFE900;
  text-transform: uppercase;
  font-family: "Neue Bold";
`;



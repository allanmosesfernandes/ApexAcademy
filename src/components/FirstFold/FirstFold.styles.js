import styled, { keyframes } from "styled-components";
import Chalk from "../../assets/images/chalkboard.jpg"
import { Keyframes } from "styled-components";
import CircleSVG from "../../assets/images/circle.svg"
import Pattern from '../../assets/images/WhyApex/bg-tablet-pattern.svg'

export const FirstFoldContainer = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3rem;
margin: 5rem 0 0 0;
height: 90vh;

@media only screen and (max-width: 600px) {
  font-size: ${props => props.theme.fsmedium};
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1rem 0 0 0;
  height: auto;
}

h2 {
    font-size: ${props => props.theme.fsxl};
    line-height: 1.2;
    font-family: "Neue ExtraBold";
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    gap: 2rem;
    span {
        color: #fff;
        position: relative;
    }
    @media only screen and (max-width: 600px) {
        font-size: 4rem;
    }
}

`

export const FirstFoldLeftDiv = styled.div`
div {
    position: relative;
}
`
export const RocketImg = styled.img `
    width: 90px;
    @media only screen and (max-width: 600px) {
      width: 50px;
        height: 50px;
    }

`
export const YellowCircleImage = styled.h2`
&:after {
    content: "";
    background-image: url(${CircleSVG});
    left: -35px;
    top: 25px;
    height: 100%;
    background-repeat: no-repeat;
    width: 350px;
    background-size: contain;
    position: absolute;
}

@media only screen and (max-width: 600px) {
  //code goes here
  &:after {
    top: 20%;
}
}
`

export const FirstFoldRight = styled.div`
  background-image: url(${Pattern});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 500px;
  display: flex;
  margin: 2rem auto;
  align-items: flex-start;
  height: 100%;
  @media only screen and (max-width: 600px) {
    //code goes here
    background: none;
    .lottie1 {
      margin: -5rem 0;
      max-width: 300px;
    }
  }
` 

export const BodyCopy = styled.p`
  color: #000;
  line-height: 1.5;
  margin: 2rem 0;
  font-size: ${(props) => props.theme.fssmall};

  /* Regular styles */

  @media screen and (max-width: 600px) {
    font-size: ${(props) => props.theme.fsxsmall};
    /* Styles for screens smaller than 600px */
  }
`

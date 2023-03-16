import styled, { keyframes } from "styled-components";
import Chalk from "../../assets/images/chalkboard.jpg"
import { Keyframes } from "styled-components";
import CircleSVG from "../../assets/images/circle.svg"

export const FirstFoldContainer = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3rem;
margin: 5rem 0 0 0;
@media only screen and (max-width: 600px) {
  font-size: ${props => props.theme.fsmedium};
  grid-template-columns: 1fr;
  gap: 1rem;
}
h2 {
    font-size: ${props => props.theme.fsxl};
    line-height: 1.2;
    color: #fff;
    display: flex;
    gap: 2rem;
    span {
        color: #fff;
        position: relative;
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
    }

`
export const YellowCircleImage = styled.h2`
&:after {
    content: "";
    background-image: url(${CircleSVG});
    left: -35px;
    top: 3%;
    height: 100%;
    background-repeat: no-repeat;
    width: 80%;
    background-size: contain;
    position: absolute;
}
`

export const FirstFoldRight = styled.div`
display: flex;
margin: auto;
` 

export const BodyCopy = styled.p`
color: #fff;
line-height: 1.5;
margin: 2rem 0;
font-size: ${(props) => props.theme.fssmall}
`
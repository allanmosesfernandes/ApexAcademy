import styled, { keyframes } from "styled-components";
import Chalk from "../../assets/images/chalkboard.jpg"
import { Keyframes } from "styled-components";
import CircleSVG from "../../assets/images/circle.svg"

export const FirstFoldContainer = styled.section`
display: flex;
margin: 5rem 0 0 0;
@media only screen and (max-width: 600px) {
  flex-direction: column;
}
h2 {
    font-size: ${props => props.theme.fsxl};
    line-height: 1.2;
    display: flex;
    gap: 2rem;
    span {
        color: ${props => props.theme.primaryColor};
        position: relative;
    }
@media only screen and (max-width: 600px) {
  font-size: ${props => props.theme.fsmedium};
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

`
export const YellowCircleImage = styled.img`
    position: absolute;
    left: -3px;
    top: 20px;
    width: 95%;
`


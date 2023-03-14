import styled, { keyframes } from "styled-components";
import Chalk from "../../assets/images/chalkboard.jpg"
import { Keyframes } from "styled-components";
export const FirstFoldContainer = styled.section`
display: flex;
margin: 5rem 0 0 0;
h2 {
    font-size: ${props => props.theme.fsxl};
    line-height: 1.2;

    span {
        color: ${props => props.theme.primaryColor}
    }
}

`

export const FirstFoldLeftDiv = styled.div`

`

export const RocketGIF = styled.img`
    width: 200px;
    heght: 200px;
`


import styled from "styled-components";
import { keyframes } from "styled-components";

export const StyledFooter = styled.footer`
background-color: #333333;
padding: 3rem 0;
min-height: 200px;
text-align: center;
border-top: 2px solid #fff;
border-bottom: 2px solid #fff;
img {
    width: 200px;
    margin: 2rem 0;
}
`

export const StyledFooterLinks = styled.div`
display: flex;
gap: 3rem;
color: white;
justify-content: center;
margin: 2rem 0;

a {
    font-size: ${props => props.theme.fsxsmall};

}

img {
    width: 30px;
    height: 30px;
}
`
const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Initials = styled.img`
  animation: ${spin} 35s linear infinite;
`;

export const CreatedBy = styled.div`
color: #fff;
display: flex;
align-items: center;
flex-direction: column;

img {
    width: 100px;
}
`
import styled from "styled-components";
import { keyframes } from "styled-components";

export const StyledFooter = styled.footer`
background-color: #29524A;
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
    font-size: ${props => props.theme.fssmall};
}

img {
    width: 50px;
    height: 50px;
}
`

export const StyledFooterLinksBordered = styled(StyledFooterLinks)`
border-top: 1px solid gray;
border-bottom: 1px solid gray;
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
  font-size: 1.5rem;

  img {
    width: 100px;
  }
`

export const FooterLine = styled.div`
color: white;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.5rem;
h3 {
    font-size: ${props => props.theme.fsmedium}
}

@media only screen and (max-width: 600px) {
  //code goes here
  flex-direction: column;
}
`
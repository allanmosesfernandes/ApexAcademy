import styled from "styled-components";
import NeueBold from "../../assets/fonts/NM-Regular.otf";
import NeueExtraBold from "../../assets/fonts/NM-Ultra.otf";

const StyledButton = styled.button`
background-color: transparent;
display: flex;
align-items: center;
gap: 2rem;
font-family: Neue Bold;
padding: 2rem 3rem;
margin: 2rem 0;
color: ${(props) => props.theme.themeGreen};
font-weight: bold;
font-size: 1.5rem;
box-shadow: 
0.3em 0.3em 0 0 green,
inset 0.3em 0.3em 0 0 green;
transition: all 0.5s ease;

&:hover,
&:focus {
  box-shadow: 
    0 0 0 0 white,
    inset 0 0 0 100px green;
    color: white;
}

img {
    width: 20px;
}
`

export default StyledButton
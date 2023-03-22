import styled from "styled-components";
import NeueBold from "../../assets/fonts/NM-Regular.otf";
import NeueExtraBold from "../../assets/fonts/NM-Ultra.otf";

const StyledButton = styled.button`
background-color: transparent;
font-family: Neue Bold;
padding: 2rem 3rem;
color: black;
font-size: 1.5rem;
  box-shadow: 
    0.3em 0.3em 0 0 green,
    inset 0.3em 0.3em 0 0 green;
  transition: all 0.3s ease;
&:hover,
&:focus {
  box-shadow: 
    0 0 0 0 white,
    inset 0 0 0 100px green;
}

`

export default StyledButton
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

export const ArrowButton = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #4353FF 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 55px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 20px;
  z-index: 99;
  // text-transform: uppercase;
  font-family: "Neue ExtraBold";
&:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}
&:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

&:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
@media only screen and (max-width: 600px) {
font-size: 12px;
height: 30px;
}
`
export default StyledButton

import styled from "styled-components";

export const FormDivWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;

}
h2{
    border-top: 1px solid black;
    border-bottom: 1px solid black;  
    color:black;
}
p {
padding: 2rem 0;
font-size: ${props => props.theme.fsmedium}; 
}

`

export const EnquiresFormStyled = styled.form`

div {
    display: flex;
    flex-direction: column;
}

input, select {
    width: 100%;
    display: block;
    font-family: "Neue Bold";
    background: transparent;
    font-size: ${props => props.theme.fssmall}; 
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    border-width: 2px;
    color:  ${props => props.theme.primaryColor} !important;
    border-color: ${props => props.theme.primaryColor} !important;
    margin: 30px 0;

    &:focus-visible: {
        border-color: ${props => props.theme.primaryColor} !important;
    }
}

`

export const PhoneInputWrapper = styled.div`
position: relative;
display: inline-block;

input[type="number"] {
  padding-left: 55px;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
}

&:before {
  content: "+91";
  position: absolute;
  left: 5px;
  color: grey;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: ${props => props.theme.fssmall};
}
`
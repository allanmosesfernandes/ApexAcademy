import styled from "styled-components";
export const FormDivWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;
}

h2{
    color:black;
    font-family: "Neue ExtraBold";

}

p {
  padding: 2rem 0;
  font-size: ${props => props.theme.fssmall}; 
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fssmall}; 
  }
}
`

export const EnquiresFormStyled = styled.form`
button {
  width: 200px;
  font-family: "Neue ExtraBold";
  font-size: 2rem;
  margin-bottom: 3rem;
}
width: 80%;
div {
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 600px) {
  width: 100%;
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
    outline: ${props => props.theme.primaryColor};
    &:focus-visible: {
        border-color: ${props => props.theme.primaryColor} !important;
    }
}

select {
  color: gray !important;
}
`

export const PhoneInputWrapper = styled.div`
position: relative;
display: inline-block;
margin: -1rem 0 1rem 0;
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
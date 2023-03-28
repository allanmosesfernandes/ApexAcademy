import styled from "styled-components";

export const FormDivWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
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
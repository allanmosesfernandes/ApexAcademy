import styled from "styled-components";

export const ContactSection = styled.section`
margin: 5rem 0 3rem 0;
h2 {
    color:  ${(props) => props.theme.primaryColor};
}
p {
    font-size: ${(props) => props.theme.fssmall};
    color: #000;
    margin: 2rem 0;
}
`
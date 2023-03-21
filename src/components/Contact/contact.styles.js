import styled from "styled-components";

export const ContactSection = styled.section`
display: grid;
grid-template-column: 1fr 2fr;
gap: 2rem;
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

export const Contact__Left  = styled.div`

`

export const Contact__Right  = styled.div`
.contact__block {

}
`
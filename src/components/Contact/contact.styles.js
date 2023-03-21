import styled from "styled-components";

export const ContactSection = styled.section`
display: grid;
grid-template-columns: 1.5fr 2fr;
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
display: flex;
gap: 2rem;
padding: 2rem 0;
align-items: flex-start;
border-bottom: 1px solid gray;
.contact__contents {

    h3 {
        font-size: ${(props) => props.theme.fsmedium};
    }

    p {
        margin: 1rem 0;
    }
    display: flex;
    flex-direction: column;
}
}
`
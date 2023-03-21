import styled from "styled-components";

export const TestimonialDiv = styled.section`

h2 {
    color:  ${(props) => props.theme.primaryColor};
}
p {
    font-size: ${(props) => props.theme.fsmedium};
    color: #000;
}
`
export const ReviewContent = styled.div`
background-color: #F0F417;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
p {
    font-size: ${(props) => props.theme.fssmall}
}

span {
    font-size: ${(props) => props.theme.fsmedium}
}

img {
    width: 50px;
    margin: auto;
}
`
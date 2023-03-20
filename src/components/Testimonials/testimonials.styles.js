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
import styled from "styled-components";

export const TestimonialDiv = styled.section`

h2 {
    color:  ${(props) => props.theme.primaryColor};
}
p {
    font-size: ${(props) => props.theme.fssmall};
    color: #000;
    margin: 2rem 0;
}
`
export const ReviewContent = styled.div`
background-color: #D782BA;
border-radius: 10px;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
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

@media only screen and (max-width: 600px) {
  //code goes here
  p {
    font-size: ${(props) => props.theme.fsxsmall}
}

}
`
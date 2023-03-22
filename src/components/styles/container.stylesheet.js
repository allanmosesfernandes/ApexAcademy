import styled from "styled-components";

const Container = styled.div `
width: 1440px;
max-width: 100%;
margin: 0 auto;
padding: 0 30px;
h2 {
    font-size: ${(props) => props.theme.fsxl};
    font-family: "Neue Bold";
    color: #fff;
}
@media only screen and (max-width: 600px) {
  h2 {
    font-size: 4rem;
  }
}
@media only screen and (max-width: 600px) {
  //code goes here
  padding: 0 15px;
}
`

export default Container
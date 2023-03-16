import styled from "styled-components";

export const Container = styled.div `
width: 1440px;
max-width: 100%;
margin: 0 auto;
padding: 0 30px;

@media only screen and (max-width: 600px) {
  //code goes here
  padding: 0 15px;
}
`
import styled from "styled-components"

export const PageNotFoundStyles = styled.div`

h2{
    color:black;
    font-family: "Neue ExtraBold";
}

img {
    width: 500px;
    height: auto;
}
button {
  width: 300px;
  font-family: "Neue ExtraBold";
  font-size: 2rem;
  margin-bottom: 3rem;
}

@media only screen and (max-width: 600px) {
    h2{
    font-size: ${props => props.theme.fsmedium}; 
    margin: 2rem 0;
}

  button {
  width: 250px;
  font-family: "Neue ExtraBold";
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
}
`
import styled from "styled-components";

export const ToppersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  h2 {
    font-size: ${(props) => props.theme.fsxl};
    line-height: 1.2;
    font-family: 'Neue ExtraBold';
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    span {
      color: #fff;
      position: relative;
    }
    @media only screen and (max-width: 600px) {
      font-size: 4rem;
    }
  }

p {
  font-size: ${(props) => props.theme.fssmall};
  width: 75%;
  margin: 2rem auto;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  p {
  font-size: ${(props) => props.theme.fsxsmall};
  width: 100%;
}
`
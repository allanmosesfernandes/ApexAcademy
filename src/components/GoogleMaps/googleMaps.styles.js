import styled from "styled-components";


export const IframeDiv = styled.div`
display: flex;
align-items:center;

`
export const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  @media only screen and (max-width: 600px) {
    height: 300px;
    margin-bottom: 2rem;
  }
`;

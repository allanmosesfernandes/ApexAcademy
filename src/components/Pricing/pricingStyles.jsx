import styled from "styled-components";
import { css } from "styled-components";
export const PricingWrapper = styled.div`
h3,h2 {
    text-align: center;
    margin: 2rem 0;
}
`

export const PricingCardStyles = styled.div`
  border-radius: 24px;
  border: 1px solid ${(props) => (props.active ? '#fff' : '#000')};
  padding: 2rem;
  background-color: ${(props) => (props.active ? '#000' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  h2 {
        color: ${(props) => (props.active ? '#FFF' : '#000')};
  }
  h3 {
    border-bottom: 1px solid ${(props) => (props.active ? '#FFF' : '#000')};
    padding-bottom: 1rem;
    color: ${(props) => (props.active ? '#FFF' : '#000')};
  }

  ul {
    margin-bottom: 5rem;
  }
  transition: transform 0.2s ease-in;

  /* Apply scaling transform when active */
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.05);
    `};

`;


export const PricingGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 3rem;

@media only screen and (max-width: 1200px) {
  grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
}
`


export const PricingButton = styled.button`
border-radius: 24px;
background-color: ${(props) => (props.active ? '#FFD778' : '#000')};
color: ${(props) => (props.active ? '#000' : '#fff')};
border: none;
width: 80%;
display: flex;
justify-content: center;
font-size: 1.5rem;
text-transform: uppercase;
font-weight: bold;
margin: 1.5rem auto;
`
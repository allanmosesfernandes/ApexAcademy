import styled from "styled-components";
import { css } from "styled-components";


export const PricingWrapper = styled.div`
#pricing-title {
  text-align: center;
}
h3,h2 {
    text-align: left;
    margin: 2rem 0;
}

p {
  font-size: ${(props) => props.theme.fsmedium};
}
ul {
    font-size: 1.5rem;
}
`
export const PricingContribution = styled.div`
font-size: ${(props) => props.theme.fsxsmall};
max-width: 800px;
display: flex;
margin: auto;
background-color: #99F6E0;
text-align: center;
justify-content: center;
padding: 2rem;

@media only screen and (max-width: 800px) {
  flex-direction: column;
}

`
export const PricingCardStyles = styled.div`
  border-radius: 24px;
  border: 1px solid ${(props) => (props.active ? '#fff' : '#000')};
  padding: 2rem;
  background-color: ${(props) => (props.active ? '#000' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  h2 {
      color: ${(props) => (props.active ? '#FFF' : '#000000')};
      position: relative;
      &:before {
        content: '₹ ${(props) => props.marketPrice}';
        position: absolute;
        font-size: 2rem;
        top: -10px;
        text-decoration: line-through;
      }
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
  ${(props) => props.active &&css`transform: scale(1.05);`};`;


export const PricingGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 3rem;
margin: 5rem 0;
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
width: 90%;
display: flex;
justify-content: center;
font-size: 1.5rem;
text-transform: uppercase;
font-weight: bold;
margin: 1.5rem auto;
padding: 1.5rem;
`
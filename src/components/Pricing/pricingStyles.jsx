import styled from "styled-components";

export const PricingWrapper = styled.div`
h3,h2 {
    color: #000;
    text-align: center;
    margin: 2rem 0;
}
`

export const PricingCardStyles = styled.div`
border-radius: 24px;
border: 2px solid #000;
padding: 2rem;

    h3{
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
    }
`

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
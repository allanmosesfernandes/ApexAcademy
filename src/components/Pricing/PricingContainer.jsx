import React from 'react'
import Container from '../styles/container.stylesheet'
import { PricingWrapper } from './pricingStyles';
import PricingCard from './PricingCard';
import { PricingGrid } from './pricingStyles';

const PricingContainer = () => {
  return (
    <Container>
        <PricingWrapper>
            <h3>Different Plans for different needs</h3>
            <PricingGrid>
                <PricingCard title="Standard IX" price="13,000" />
                <PricingCard title="Standard X" price="1234" />
                <PricingCard title=" FYJC" price="1234" />
                <PricingCard title=" SYJC" price="1234" />
                <PricingCard title=" FYBcom" price="1234" />
                <PricingCard title=" SYBcom" price="1234" />
                <PricingCard title=" TYBcom" price="1234" />
            </PricingGrid>
            
        </PricingWrapper>
    </Container>
  )
}

export default PricingContainer
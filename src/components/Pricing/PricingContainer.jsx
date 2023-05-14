import React from 'react'
import Container from '../styles/container.stylesheet'
import { PricingWrapper } from './pricingStyles';
import PricingCard from './PricingCard';
import { PricingGrid } from './pricingStyles';
import { useState } from 'react';

const PricingContainer = () => {
    const [activeCard, setActiveCard ] = useState("Standard IX");

    const handleCardClick = (title) => {
        setActiveCard(title);
    }

  return (
    <Container>
        <PricingWrapper>
            <h3>Different Plans for different needs</h3>
            <PricingGrid>
                <PricingCard 
                    title="Standard IX" 
                    price="13,000" 
                    active={activeCard === "Standard IX"}
                    onClick = {handleCardClick}
                />
                <PricingCard 
                    title="Standard X" 
                    price="1234"  
                    onClick = {handleCardClick}
                    active={activeCard === "Standard X"}
                />
                <PricingCard 
                    title="FYJC" 
                    price="1234" 
                    onClick = {handleCardClick}
                    active={activeCard === "FYJC"}
                />

                <PricingCard
                    title="SYJC" 
                    price="1234" 
                    onClick = {handleCardClick}
                    active={activeCard === "SYJC"}
                 />

                <PricingCard
                    title="FYBcom" 
                    price="1234" 
                    onClick = {handleCardClick}
                    active={activeCard === "FYBcom"}
                />
                    
                <PricingCard
                    title="SYBcom" 
                    price="1234" 
                    onClick = {handleCardClick}
                    active={activeCard === "SYBcom"}
                />

                <PricingCard
                    title="TYBcom" 
                    price="1234" 
                    onClick = {handleCardClick}
                    active={activeCard === "TYBcom"}
                />
            </PricingGrid>
            
        </PricingWrapper>
    </Container>
  )
}

export default PricingContainer
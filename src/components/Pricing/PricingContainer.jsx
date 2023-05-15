import React from 'react'
import Container from '../styles/container.stylesheet'
import { PricingWrapper, PricingGrid, PricingContribution } from './pricingStyles';
import PricingCard from './PricingCard';
import { useState } from 'react';
import Student from "../../assets/images/woman-student.png"
const PricingContainer = () => {
    const [activeCard, setActiveCard ] = useState("Standard IX");

    const handleCardClick = (title) => {
        setActiveCard(title);
    }

  return (
    <Container>
        <PricingWrapper>
            <h3 id="pricing-title">Affordable Pricing for Quality Education</h3>
            <p className='pricing-bodycopy'>
                At Apex academy, we are committed to providing affordable and accessible education to students. Unlike other coaching institues, we prioritize your financial well-being by offering rates that are nearly half of what you would typically pay at a premium institute. We firmly believe that high-quality education should be within reach for all students, regardless of their financial background.
            </p>
            <PricingContribution><img src={Student} alt="woman student" /><strong>Empowering Women:</strong>  
            
            &nbsp;&nbsp;4% of our revenue supports women education initiatives.
            </PricingContribution>
            <PricingGrid>
                <PricingCard 
                    title="Standard IX" 
                    price="13,000"
                    marketPrice="24,000" 
                    active={activeCard === "Standard IX"}
                    onClick = {handleCardClick}
                />
                <PricingCard 
                    title="Standard X" 
                    price="18,000"
                    marketPrice="30,000"  
                    onClick = {handleCardClick}
                    active={activeCard === "Standard X"}
                />
                <PricingCard 
                    title="FYJC" 
                    price="15,000"
                    marketPrice="40,000" 
                    onClick = {handleCardClick}
                    active={activeCard === "FYJC"}
                />

                <PricingCard
                    title="SYJC" 
                    price="12,000" 
                    marketPrice="40,000"
                    onClick = {handleCardClick}
                    active={activeCard === "SYJC"}
                 />

                <PricingCard
                    title="FYBcom" 
                    price="16,000"
                    marketPrice="35,000" 
                    onClick = {handleCardClick}
                    active={activeCard === "FYBcom"}
                />
                    
                <PricingCard
                    title="SYBcom" 
                    price="1234"
                    marketPrice="30,000" 
                    onClick = {handleCardClick}
                    active={activeCard === "SYBcom"}
                />

                <PricingCard
                    title="TYBcom" 
                    price="18,000"
                    marketPrice="28,000" 
                    onClick = {handleCardClick}
                    active={activeCard === "SYBcom"}
                />
            </PricingGrid>
            
        </PricingWrapper>
    </Container>
  )
}

export default PricingContainer
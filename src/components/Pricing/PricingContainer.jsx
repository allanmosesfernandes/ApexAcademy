import React from 'react'
import Container from '../styles/container.stylesheet'
import { PricingWrapper, PricingGrid, PricingContribution } from './pricingStyles';
import PricingCard from './PricingCard';
import { useState } from 'react';
import Student from "../../assets/images/woman-student.png";
import Gift from "../../assets/images/gift.png";
import { ReferalSteps } from './pricingStyles';
import { ReferalContent,ReferalContribution } from './pricingStyles';
const PricingContainer = () => {
    const [activeCard, setActiveCard ] = useState("Standard V");

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
                    title="Standard V" 
                    price="6,000"
                    marketPrice="10,000" 
                    monthly="600"
                    active={activeCard === "Standard V"}
                    onClick = {handleCardClick}
                />
                <PricingCard 
                    title="Standard VI" 
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
            
            <ReferalContribution>
                <img src={Gift} alt="Referral Gift" id="referal-gift"/>
                <h3>Refer a Friend and Save 20% </h3>
                <img src={Gift} alt="Referral Gift" id="referal-gift"/>
            </ReferalContribution>
            <p className='pricing-bodycopy'>
                At Apex Academy, we believe in the power of word-of-mouth and the value of our students' recommendations. That's why we're excited to introduce our referral program.<br /> Refer a friend to Apex and both you and your friend will receive a fantastic discount of 20% on tuition fees!
            </p>
            <h4>Here's how it works:</h4>
            <ReferalContent><span>1. Refer a Friend:</span></ReferalContent>

                <ReferalSteps>
                    <li>Spread the word about Apex Academy to your friends, classmates, or family members who could benefit from our exceptional coaching.</li>
                    <li>Encourage them to mention your name or provide your unique referral code during the enrollment process</li>
                </ReferalSteps>
            <ReferalContent><span>2. Get Rewarded:</span></ReferalContent>

                <ReferalSteps>
                    <li>When your referred friend enrolls and completes payment for any of our courses, you and your friend will both receive a 20% discount on tuition fees.</li>
                    <li>The discount will be applied to your respective courses, helping you save significantly on your educational journey.</li>
                </ReferalSteps>
            <ReferalContent><span>3. Share the Benefits:</span></ReferalContent>

                <ReferalSteps>
                    <li>By referring your friends, not only do you enjoy great savings, but you also help them access high-quality education at an affordable price.</li>
                    <li>Together, we can build a strong community of motivated learners and support each other in achieving academic success.</li>
                </ReferalSteps>

        </PricingWrapper>
    </Container>
  )
}

export default PricingContainer
import React from 'react';
import { useState } from 'react';
import  Container  from '../styles/container.stylesheet'
import Collab from "../../assets/images/collaborative.svg";
import { ValuesContainer, ValueCard, PurpleToggle, Approach__container, Approach_Div_Right } from './values.styles';
import PurplePlus from "../../assets/images/principles/purpleplus.svg";
import Evolve from "../../assets/images/principles/evolving.svg";
import Getter from "../../assets/images/principles/go-getter.svg";
import Marquee from '../Marquee/Marquee'
import Reason1 from "../../assets/images/WhyApex/reason1.svg"
import Reason2 from "../../assets/images/WhyApex/reason2.svg"
import Reason3 from "../../assets/images/WhyApex/reason3.svg"
const Values = () => {

    //== Toggle State ==//
    const ToggleIcon = (e) => {
        const plusIcon = e.target.classList.toggle("active");
        const ValueCard = e.target.offsetParent.classList.toggle("active");
    };

  return (
    <>
      <Marquee />
      <Container>
        <ValuesContainer>
          <h2>This is how we approach learning together</h2>
          <Approach__container>
            <div className='approach_div_left'>
              <div className='approach__img'>
                <img src={Reason1} alt='Reason one' />
              </div>
            </div>
            <div className='approach_div_right'>
              {/* <span className='number-small'>
                01 - Gain a Comprehensive Understanding of Concepts
              </span> */}
              <h4>01-Conceptual Learning</h4>
              <p className='body-copy'>
                At Apex Academy, we understand that true mastery of commerce
                requires more than just surface-level knowledge. That's why our
                courses focus on developing your conceptual understanding of
                commerce concepts, going beyond the basics.
              </p>
            </div>
          </Approach__container>
          <Approach__container>
            <div className='approach_div_right'>
              {/* <span className='number-small'>
                02 - Quality Education at an Affordable Price
              </span> */}
              <h4>02-Affordable Pricing</h4>
              <p className='body-copy'>
                At Apex Academy, we believe that everyone should have access to
                quality education. That's why we offer our courses at an
                affordable price point, without compromising on the quality of
                education. Our goal is to help you achieve your career
                aspirations without breaking the bank.
              </p>
            </div>
            <div className='approach_div_left'>
              <div className='approach__img'>
                <img src={Reason2} alt='Reason one' />
              </div>
            </div>
          </Approach__container>
          <Approach__container className='reverse'>
            <div className='approach_div_left'>
              <div className='approach__img'>
                <img src={Reason3} alt='Reason one' />
              </div>
            </div>
            <div>
              {/* <span className='number-small'>
                03 - Learn from Industry Experts with Real-World Experience
              </span> */}
              <h4>03-Team of Experts.</h4>
              <p className='body-copy'>
                Our instructors at Apex Academy bring real-world knowledge and
                insights to the classroom, giving you a competitive edge in your
                understanding of concepts. Our goal is to provide you with a
                comprehensive understanding of commerce that goes beyond just
                memorizing formulas, and equip you with the skills you need to
                succeed in the subject and beyond.
              </p>
            </div>
          </Approach__container>
          {/* <ValueCard >
            <div className="values-inital">
                <img src={ Collab } alt="collaboration" />
                <h2>COLLABORATIVE</h2>
                <p>Nobody is smart as everybody</p>
            </div>
            <span>
                We believe in the power of collective intelligence and teamwork. Nobody is as smart as everybody together.
            </span>
            <PurpleToggle src={PurplePlus} alt="Icon to toggle state on mobile" onClick={ToggleIcon} />
        </ValueCard>
        <ValueCard >
            <div className="values-inital">
                <img src={ Reason1 } alt="collaboration" />
                <h2>COLLABORATIVE</h2>
                <p>Nobody is smart as everybody</p>
            </div>
            <span>
                We believe in the power of collective intelligence and teamwork. Nobody is as smart as everybody together.
            </span>
            <PurpleToggle src={PurplePlus} alt="Icon to toggle state on mobile" onClick={ToggleIcon} />
        </ValueCard>
        <ValueCard >
            <div className="values-inital">
                <img src={ Getter } alt="collaboration" />
                <h2>COLLABORATIVE</h2>
                <p>Nobody is smart as everybody</p>
            </div>
            <span>
                We believe in the power of collective intelligence and teamwork. Nobody is as smart as everybody together.
            </span>
            <PurpleToggle src={PurplePlus} alt="Icon to toggle state on mobile" onClick={ToggleIcon} />
        </ValueCard> */}
        </ValuesContainer>
      </Container>
    </>
  )
}

export default Values
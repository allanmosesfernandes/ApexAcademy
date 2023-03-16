import React, { useState } from 'react'
import Container from '../styles/container.stylesheet'
import { ButtonContainer , DisplayCourse, ExploreCoursesSection,CourseBtn,CourseCardsContainer,CourseCard} from './explorecourses.styles'

const ExploreCourses = () => {
const [activeButton, setActiveButton] = useState(0);

const handleButtonClick = (index) => {
  setActiveButton(index);
};
  return (
<Container>
<ExploreCoursesSection>
<h2>Explore our courses</h2>
    <ButtonContainer>
      <CourseBtn onClick={() => handleButtonClick(0)} className={activeButton === 0 ? "active" : ""}> FYJC & SYJC </CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "active" : ""}>BCOM</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "active" : ""}>BAF</CourseBtn>
    </ButtonContainer>
    <DisplayCourse>

      <CourseCardsContainer>
        <CourseCard className={activeButton === 0 ? 'active' : '' }>
            <h3>FYJC & SYJC</h3>
        </CourseCard>
        <CourseCard className={activeButton === 1 ? 'active' : '' }>
            <h3>BCOM</h3>
        </CourseCard>
        <CourseCard className={activeButton === 2 ? 'active' : '' }>
            <h3>BAF</h3>
        </CourseCard>
      </CourseCardsContainer>

    </DisplayCourse>
    </ExploreCoursesSection>
    
  </Container>
  )
}

export default ExploreCourses
import React, { useState } from 'react'
import Container from '../styles/container.stylesheet'
import { ButtonContainer , DisplayCourse, ExploreCoursesSection} from './explorecourses.styles'

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
      <button onClick={() => handleButtonClick(0)} className={activeButton === 0 ? "active" : ""}>

      </button>
      <button onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "active" : ""}>2</button>
      <button onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "active" : ""}>3</button>
    </ButtonContainer>
    <DisplayCourse>
      <div style={{ display: activeButton === 0 ? 'block' : 'none' }}>
        <h2>this is what shows on button 1</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, voluptatum.
        </p>
      </div>
      <div style={{ display: activeButton === 1 ? 'block' : 'none' }}>
        <h2>this is what shows on button 2</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, voluptatum.
        </p>
      </div>
      <div style={{ display: activeButton === 2 ? 'block' : 'none' }}>
        <h2>this is what shows on button 3</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, voluptatum.
        </p>
      </div>
    </DisplayCourse>
    </ExploreCoursesSection>
    
  </Container>
  )
}

export default ExploreCourses
import React, { useState } from 'react'
import Container from '../styles/container.stylesheet'
import { ButtonContainer , DisplayCourse, ExploreCoursesSection,CourseBtn,CourseCardsContainer,CourseCard} from './explorecourses.styles'
import Stats from "../../assets/images/EXPLORE/calc.svg";
import Dollar from "../../assets/images/EXPLORE/worldDOllar.svg";
import Calculator from "../../assets/images/EXPLORE/calculator.svg";
import Coins from "../../assets/images/EXPLORE/coins.svg";
import Ruppee from "../../assets/images/EXPLORE/ruppe-bag.svg";
import Chart from "../../assets/images/EXPLORE/graph.svg";
import Cart from "../../assets/images/EXPLORE/cart.svg";


const ExploreCourses = () => {
const [activeButton, setActiveButton] = useState(0);
    const [courseDetails, setCourseDetails] = useState([
        {
            courseTitle: "FYJC",
            subjects: [
                {
                    name: "Mathematics and Statistics",
                    image: Stats
                },
                {
                    name: "S.P",
                    image: Dollar
                },
                {
                    name: "Organisation of Commerce",
                    image: Chart
                },
                {
                    name: "Economics",
                    image: Coins
                },
                {
                    name: "Book-Keeping and Accountancy",
                    image: Ruppee
                },
            ]
        },
        {
            courseTitle: "SYJC",
            subjects: [
                {
                    name: "Mathematics and Statistics",
                    image: Stats
                },
                {
                    name: "S.P",
                    image: Dollar
                },
                {
                    name: "Organisation of Commerce",
                    image: Chart
                },
                {
                    name: "Economics",
                    image: Coins
                },
                {
                    name: "Book-Keeping and Accountancy",
                    image: Ruppee
                },
            ]
        },
        {
            courseTitle: "FYBCOM",
            subjects: [
                {
                    name: "Mathematics and Statistics",
                    image: Stats
                },
                {
                    name: "S.P",
                    image: Dollar
                },
                {
                    name: "Organisation of Commerce",
                    image: Chart
                },
                {
                    name: "Economics",
                    image: Coins
                },
                {
                    name: "Book-Keeping and Accountancy",
                    image: Ruppee
                },
            ]
        },

    ]);

   
const handleButtonClick = (index) => {
  setActiveButton(index);
};
  return (
<Container>
<ExploreCoursesSection>
<h2>Explore our courses</h2>
    <ButtonContainer>
      <CourseBtn onClick={() => handleButtonClick(0)} className={activeButton === 0 ? "active" : ""}> FYJC </CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "active" : ""}>SYJC</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "active" : ""}>BAF</CourseBtn>
    </ButtonContainer>
    <DisplayCourse>

      <CourseCardsContainer>
        <CourseCard className={activeButton === 0 ? 'active' : '' }>
<div className="course-card-flex-container">
  {courseDetails
    .filter((course) => course.courseTitle === "FYJC")
    .map((course) =>
      course.subjects.map((subject) => (
        <div className="course-card">
          <img src={subject.image} alt={subject.name} />
          <p>{subject.name}</p>
        </div>
      ))
    )}
</div>


        </CourseCard>
        <CourseCard className={activeButton === 1 ? 'active' : '' }>
<div className="course-card-flex-container">
  {courseDetails
    .filter((course) => course.courseTitle === "FYJC")
    .map((course) =>
      course.subjects.map((subject) => (
        <div className="course-card">
          <img src={subject.image} alt={subject.name} />
          <h3>{subject.name}</h3>
        </div>
      ))
    )}
</div>

        </CourseCard>
        <CourseCard className={activeButton === 2 ? 'active' : '' }>
            <div className="course-card-flex-container">
                <div className="course-card-pill">
                    <img src="" alt="" />
                    <h4>Book-Keeping and Accountancy</h4>
                </div>
            </div>
        </CourseCard>
      </CourseCardsContainer>

    </DisplayCourse>
    </ExploreCoursesSection>
    
  </Container>
  )
}

export default ExploreCourses
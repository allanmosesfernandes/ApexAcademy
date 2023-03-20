import React, { useState } from 'react'
import Container from '../styles/container.stylesheet'
import { ButtonContainer , DisplayCourse, ExploreCoursesSection,CourseBtn,CourseCardsContainer,CourseCard, CourseCardFlexContainer , CourseCardDetails} from './explorecourses.styles'
import Stats from "../../assets/images/EXPLORE/FunctionMath.svg";
import AutoGraphSharp from "../../assets/images/EXPLORE/AutoGraphSharp.svg";
import Coins from "../../assets/images/EXPLORE/coins.svg";
import Ruppee from "../../assets/images/EXPLORE/MoneyBill.svg";
import Chart from "../../assets/images/EXPLORE/FunctionMath.svg";
import Retail from "../../assets/images/EXPLORE/Retail.svg";


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
                    name: "Secretarial Practice",
                    image: Retail
                },
                {
                    name: "Organisation of Commerce",
                    image: AutoGraphSharp
                },
                {
                    name: "Economics",
                    image: Coins
                },
                {
                    name: "Book-Keeping & Accountancy",
                    image: Ruppee
                },
            ]
        },
        {
            courseTitle: "SYJC",
            subjects: [
                {
                    name: "Statistics",
                    image: Stats
                },
                {
                    name: "S.P",
                    image: Retail
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
                    name: "Mathematics",
                    image: Stats
                },
                {
                    name: "S.P",
                    image: Retail
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
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum et quae, modi corrupti animi obcaecati est aliquam accusamus expedita voluptate.
</p>
    <ButtonContainer>
      <CourseBtn onClick={() => handleButtonClick(0)} className={activeButton === 0 ? "active" : ""}> FYJC </CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "active" : ""}>SYJC</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "active" : ""}>FYBCOM</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(3)} className={activeButton === 3 ? "active" : ""}>SYBCOM</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(4)} className={activeButton === 2 ? "active" : ""}>TYBCOM</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(5)} className={activeButton === 2 ? "active" : ""}>FYBCOM</CourseBtn>
      <CourseBtn onClick={() => handleButtonClick(6)} className={activeButton === 2 ? "active" : ""}>FYBCOM</CourseBtn>
    </ButtonContainer>
    <DisplayCourse>

      <CourseCardsContainer>
        <CourseCard className={activeButton === 0 ? 'active' : '' }>
        <CourseCardFlexContainer>
            {
                courseDetails.filter((course) => course.courseTitle === "FYJC")
                .map((course) => course.subjects.map((subject, index) => (
                    <CourseCardDetails key={index}>
                        <img src={subject.image} alt={subject.name} />
                        <p>{subject.name}</p>
                    </CourseCardDetails>)))
            }
        </CourseCardFlexContainer>
        </CourseCard>
        <CourseCard className={activeButton === 1 ? 'active' : '' }>
        <CourseCardFlexContainer>
            {
                courseDetails.filter((course) => course.courseTitle === "SYJC")
                .map((course) => course.subjects.map((subject, index) => (
                    <CourseCardDetails key={index}>
                        <img src={subject.image} alt={subject.name} />
                        <p>{subject.name}</p>
                    </CourseCardDetails>)))
            }
        </CourseCardFlexContainer>
        </CourseCard>
        <CourseCard className={activeButton === 2 ? 'active' : '' }>
        <CourseCardFlexContainer>
            {
                courseDetails.filter((course) => course.courseTitle === "FYBCOM")
                .map((course) => course.subjects.map((subject, index) => (
                    <CourseCardDetails key={index}>
                        <img src={subject.image} alt={subject.name} />
                        <p>{subject.name}</p>
                    </CourseCardDetails>)))
            }
        </CourseCardFlexContainer>
        </CourseCard>
        <CourseCard className={activeButton === 3 ? 'active' : '' }>
        <CourseCardFlexContainer>
            {
                courseDetails.filter((course) => course.courseTitle === "FYJC")
                .map((course) => course.subjects.map((subject, index) => (
                    <CourseCardDetails key={index}>
                        <img src={subject.image} alt={subject.name} />
                        <p>{subject.name}</p>
                    </CourseCardDetails>)))
            }
        </CourseCardFlexContainer>
        </CourseCard>
      </CourseCardsContainer>

    </DisplayCourse>
    </ExploreCoursesSection>
    
  </Container>
  )
}

export default ExploreCourses
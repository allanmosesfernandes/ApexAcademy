import React, { useState } from 'react'
import Container from '../styles/container.stylesheet'
import {
  ButtonContainer,
  DisplayCourse,
  ExploreCoursesSection,
  CourseBtn,
  CourseCardsContainer,
  CourseCard,
  CourseCardFlexContainer,
  CourseCardDetails,
} from './explorecourses.styles'
import Stats from '../../assets/images/EXPLORE/FunctionMath.svg'
import AutoGraphSharp from '../../assets/images/EXPLORE/AutoGraphSharp.svg'
import Coins from '../../assets/images/EXPLORE/coins.svg'
import Ruppee from '../../assets/images/EXPLORE/MoneyBill.svg'
import Chart from '../../assets/images/EXPLORE/FunctionMath.svg'
import Retail from '../../assets/images/EXPLORE/Retail.svg'
import CourseTable from './CourseTables'

const ExploreCourses = () => {
  const [activeButton, setActiveButton] = useState(0)
  const [courseDetails, setCourseDetails] = useState([
    {
      courseTitle: 'School',
      subjects: [
        {
          name: 'Maths',
          image: Stats,
        },
        {
          name: 'Science',
          image: Retail,
        },
        {
          name: 'Social Studies',
          image: AutoGraphSharp,
        },
        {
          name: 'English',
          image: Coins,
        },
        {
          name: 'Hindi',
          image: Ruppee,
        },
        {
          name: 'Marathi',
          image: Ruppee,
        },
      ],
    },
    {
      courseTitle: 'SYJC',
      subjects: [
        {
          name: 'Accounts/ Book Keeping',
          image: Stats,
        },
        {
          name: 'Maths',
          image: Retail,
        },
        {
          name: 'Secreterial Practice',
          image: Chart,
        },
        {
          name: 'Economics',
          image: Coins,
        },
        {
          name: 'OCM',
          image: Ruppee,
        },
      ],
    },
    {
      courseTitle: 'FYBCOM',
      subjects: [
        {
          name: 'Mathematics',
          image: Stats,
        },
        {
          name: 'S.P',
          image: Retail,
        },
        {
          name: 'Organisation of Commerce',
          image: Chart,
        },
        {
          name: 'Economics',
          image: Coins,
        },
        {
          name: 'Book-Keeping and Accountancy',
          image: Ruppee,
        },
      ],
    },
  ])
const subjectData = [
  {
    subjectTitle: 'BCom',
    years: [
      {
        yearTitle: 'FYBCom',
        semesters: [
          {
            semesterTitle: 'Semester 1',
            subjects: ['Economics', 'Accounts & FM', 'Maths', 'Commerce'],
          },
          {
            semesterTitle: 'Semester 2',
            subjects: ['Economics', 'Accounts & FM', 'Maths', 'Commerce'],
          },
        ],
      },
      {
        yearTitle: 'SYBCom',
        semesters: [
          {
            semesterTitle: 'Semester 3',
            subjects: [
              'Economics',
              'Business Law',
              'Acc & FM',
              'Management Accounting',
            ],
          },
          {
            semesterTitle: 'Semester 4',
            subjects: ['Economics', 'Business Law', 'Acc & FM', 'Auditing'],
          },
        ],
      },
      {
        yearTitle: 'TYBCom',
        semesters: [
          {
            semesterTitle: 'Semester 5',
            subjects: [
              'Economics',
              'Financial Accounting & auditing',
              'Cost Accounting',
              'Direct & Indirect Taxation',
            ],
          },
          {
            semesterTitle: 'Semester 6',
            subjects: [
              'Economics',
              'Financial Accounting & auditing',
              'Cost Accounting',
              'Direct & Indirect Taxation',
            ],
          },
        ],
      },
    ],
    subjectTitle: 'BMS',
    years: [
      {
        yearTitle: 'FYBMS',
        semesters: [
          {
            semesterTitle: 'Semester 1',
            subjects: [
              'Business Law',
              'Business Statistics',
              'Financial Accounts',
              'Economics',
            ],
          },
          {
            semesterTitle: 'Semester 2',
            subjects: [
              'Principles of Marketing',
              'Business Mathematics',
              'Principles of management',
              'Industrial Law',
            ],
          },
        ],
      },
      {
        yearTitle: 'SYBMS',
        semesters: [
          {
            semesterTitle: 'Semester 3',
            subjects: [
              'Accounting for managerial decision',
              'Corporate Finance',
              'Equity & Debt Market',
              'Strategic Management',
            ],
          },
          {
            semesterTitle: 'Semester 4',
            subjects: [
              'Production & Total Quality Management',
              'Corporate Restructuring',
              'Financial institutions & markets'
            ],
          },
        ],
      },
      {
        yearTitle: 'TYBMS',
        semesters: [
          {
            semesterTitle: 'Semester 5',
            subjects: [
              'Investment Analysis & Portfolio',
              'Risk management',
              'Wealth management',
              'Direct Taxes',
            ],
          },
          {
            semesterTitle: 'Semester 6',
            subjects: [
              'Strategic Financial management',
              'International Finance',
              'Indirect Taxes(GST)',
            ],
          },
        ],
      },
    ],
  },
]


  const handleButtonClick = (index) => {
    setActiveButton(index)
  }
  return (
    <Container>
      <ExploreCoursesSection>
        <h2>Explore our courses</h2>
        <p>
          Discover the range of courses we offer at Apex Academy and find the
          perfect fit for your career goals.
          <br /> Our programs are designed to provide you with a comprehensive
          understanding of commerce and equip you with the skills to succeed.
        </p>
        <ButtonContainer>
          <CourseBtn
            onClick={() => handleButtonClick(0)}
            className={activeButton === 0 ? 'active' : ''}
          >
            School Section V to X
          </CourseBtn>
          <CourseBtn
            onClick={() => handleButtonClick(1)}
            className={activeButton === 1 ? 'active' : ''}
          >
            FYJC & SYJC (Commerce)
          </CourseBtn>
          <CourseBtn
            onClick={() => handleButtonClick(2)}
            className={activeButton === 2 ? 'active' : ''}
          >
            BAF
          </CourseBtn>
          <CourseBtn
            onClick={() => handleButtonClick(3)}
            className={activeButton === 3 ? 'active' : ''}
          >
            BMS
          </CourseBtn>
          <CourseBtn
            onClick={() => handleButtonClick(4)}
            className={activeButton === 2 ? 'active' : ''}
          >
            B.Com
          </CourseBtn>
          <CourseBtn
            onClick={() => handleButtonClick(5)}
            className={activeButton === 2 ? 'active' : ''}
          >
            BBI
          </CourseBtn>
        </ButtonContainer>
        <DisplayCourse>
            <CourseTable subjectData={subjectData} />
          {/* <CourseCardsContainer>
        <CourseCard className={activeButton === 0 ? 'active' : '' }>
        <CourseCardFlexContainer>
            {
                courseDetails.filter((course) => course.courseTitle === "School")
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
      </CourseCardsContainer> */}
        </DisplayCourse>
      </ExploreCoursesSection>
    </Container>
  )
}

export default ExploreCourses

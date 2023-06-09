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
    subjectTitle: 'B.Com.',
    years: [
      {
        yearTitle: 'FYBCom',
        semesters: [
          {
            semesterTitle: 'Semester I',
            subjects: ['Economics', 'Accounts & FM', 'Maths', 'Commerce'],
          },
          {
            semesterTitle: 'Semester II',
            subjects: ['Economics', 'Accounts & FM', 'Maths', 'Commerce'],
          },
        ],
      },
      {
        yearTitle: 'SYBCom',
        semesters: [
          {
            semesterTitle: 'Semester III',
            subjects: [
              'Economics',
              'Business Law',
              'Acc & FM',
              'Management Accounting',
            ],
          },
          {
            semesterTitle: 'Semester IV',
            subjects: ['Economics', 'Business Law', 'Acc & FM', 'Auditing'],
          },
        ],
      },
      {
        yearTitle: 'TYBCom',
        semesters: [
          {
            semesterTitle: 'Semester V',
            subjects: [
              'Economics',
              'Financial Accounting & auditing',
              'Cost Accounting',
              'Direct & Indirect Taxation',
            ],
          },
          {
            semesterTitle: 'Semester VI',
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
  },
  {
    subjectTitle: 'BMS',
    years: [
      {
        yearTitle: 'FYBMS',
        semesters: [
          {
            semesterTitle: 'Semester I',
            subjects: [
              'Business Law',
              'Business Statistics',
              'Financial Accounts',
              'Economics',
            ],
          },
          {
            semesterTitle: 'Semester II',
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
            semesterTitle: 'Semester III',
            subjects: [
              'Accounting for managerial decision',
              'Corporate Finance',
              'Equity & Debt Market',
              'Strategic Management',
            ],
          },
          {
            semesterTitle: 'Semester IV',
            subjects: [
              'Production & Total Quality Management',
              'Corporate Restructuring',
              'Financial institutions & markets',
            ],
          },
        ],
      },
      {
        yearTitle: 'TYBMS',
        semesters: [
          {
            semesterTitle: 'Semester V',
            subjects: [
              'Investment Analysis & Portfolio',
              'Risk management',
              'Wealth management',
              'Direct Taxes',
            ],
          },
          {
            semesterTitle: 'Semester VI',
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
  {
    subjectTitle: 'BBI',
    years: [
      {
        yearTitle: 'FYBBI',
        semesters: [
          {
            semesterTitle: 'Semester I',
            subjects: [
              'Principles of management',
              'Financial Accounting',
              'Economics',
              'Quants & Maths',
            ],
          },
          {
            semesterTitle: 'Semester II',
            subjects: [
              'Business Law',
              'Financial Accounting',
              'Organizational Behavior',
              'Quants & Maths',
            ],
          },
        ],
      },
      {
        yearTitle: 'SYBBI',
        semesters: [
          {
            semesterTitle: 'Semester III',
            subjects: [
              'Financial management',
              'Management Accounting',
              'Direct Tax',
              'Financial markets',
            ],
          },
          {
            semesterTitle: 'Semester IV',
            subjects: [
              'Financial management',
              'Cost accounting',
              'Corporate & Securities Law',
              'Economics',
            ],
          },
        ],
      },
      {
        yearTitle: 'TYBBI',
        semesters: [
          {
            semesterTitle: 'Semester V',
            subjects: [
              'Strategic Management',
              'Financial Reporting & Analysis',
              'Business Ethics & Governance',
            ],
          },
          {
            semesterTitle: 'Semester VI',
            subjects: [
              'Security Analysis & Portfolio management',
              'Central Banking',
              'Marketing in Banking & Insurance',
            ],
          },
        ],
      },
    ],
  },
  {
    subjectTitle: 'BAF',
    years: [
      {
        yearTitle: 'FYBAF',
        semesters: [
          {
            semesterTitle: 'Semester I',
            subjects: [
              'Financial Accounting',
              'Cost Accounting',
              'Financial Management',
              'Business Economics',
              'Business Environment',
            ],
          },
          {
            semesterTitle: 'Semester II',
            subjects: [
              'Financial Accounting',
              'Auditing',
              'Direct taxation',
              'Business Law',
              'Maths',
            ],
          },
        ],
      },
      {
        yearTitle: 'SYBAF',
        semesters: [
          {
            semesterTitle: 'Semester III',
            subjects: [
              'Financial Accounting',
              'Cost Accounting',
              'Auditing',
              'Business Law',
              'Direct Taxation',
            ],
          },
          {
            semesterTitle: 'Semester IV',
            subjects: [
              'Financial management',
              'Cost accounting',
              'Corporate & Securities Law',
              'Economics',
            ],
          },
        ],
      },
      {
        yearTitle: 'TYBAF',
        semesters: [
          {
            semesterTitle: 'Semester V',
            subjects: [
              'Financial Accounting',
              'Financial Accounting',
              'Cost Accounting',
              'Indirect Taxation(GST)',
              'Management Application',
            ],
          },
          {
            semesterTitle: 'Semester VI',
            subjects: [
              'Financial Accounting',
              'Cost Accounting',
              'Financial management',
              'Indirect Taxation(GST)',
              'Economics.',
            ],
          },
        ],
      },
    ],
  },
  {
    subjectTitle: 'FYJC & SYJC Commerce',
    years: [
      {
        yearTitle: 'Std XI - Std XII',
        semesters: [
          {
            semesterTitle: '',
            subjects: [
              'Accounts/ Book Keeping',
              'Maths',
              'Secreterial Practice',
              'Economics',
              'OCM',
              'English & Hindi (FREE)',
            ],
          },
        ],
      },
    ],
  },
  {
    subjectTitle: 'School Section',
    years: [
      {
        yearTitle: 'Std V to Std X',
        semesters: [
          {
            semesterTitle: '',
            subjects: [
              'Maths',
              'Science',
              'Social Studies',
              'English',
              'Hindi',
              'Marathi',
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
          Discover the range of courses we offer at Apex Learning Academy and find the
          perfect fit for your career goals.
          <br /> Our programs are designed to provide you with a comprehensive
          understanding of commerce and equip you with the skills to succeed.
        </p>
        <ButtonContainer>
          {subjectData.map((subject, index) => (
            <CourseBtn
              key={index}
              onClick={() => handleButtonClick(index)}
              className={activeButton === index ? 'active' : ''}
            >
              {subject.subjectTitle}
            </CourseBtn>
          ))}
        </ButtonContainer>
        <DisplayCourse>
          <CourseCardsContainer>
            <CourseCardFlexContainer>
              {subjectData.map((subject, index) => (
                <CourseCard
                  key={index}
                  className={activeButton === index ? 'active' : ''}
                >
                  {activeButton === index && (
                    <CourseTable
                      subjectData={subjectData}
                      subject={subject.subjectTitle}
                    />
                  )}
                </CourseCard>
              ))}
            </CourseCardFlexContainer>
          </CourseCardsContainer>
        </DisplayCourse>
      </ExploreCoursesSection>
    </Container>
  )
}

export default ExploreCourses

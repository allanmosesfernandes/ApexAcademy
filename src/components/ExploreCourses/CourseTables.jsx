import React from 'react'
import { FilteredTable, SubjectTitle, YearTitle } from './explorecourses.styles'
const CourseTable = ({ subjectData, subject }) => {
  const filteredData = subjectData.filter(
    (data) => data.subjectTitle === subject,
  )

  return (
    <div>
      {filteredData.map((filteredSubject) => (
        <div key={filteredSubject.subjectTitle}>
          <SubjectTitle>{filteredSubject.subjectTitle}</SubjectTitle>
          <FilteredTable>
            {filteredSubject.years.map((year) => (
              <div key={year.yearTitle}>
                <YearTitle>{year.yearTitle}</YearTitle>
                <div>
                  {year.semesters.map((semester) => (
                    <div key={semester.semesterTitle}>
                      <h4>{semester.semesterTitle}</h4>
                      <ul>
                        {semester.subjects.map((subject, index) => (
                          <li key={index}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </FilteredTable>
        </div>
      ))}
    </div>
  )
}

export default CourseTable

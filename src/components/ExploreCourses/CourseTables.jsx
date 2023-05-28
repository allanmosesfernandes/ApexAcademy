import React from 'react'
import { FilteredTable } from './explorecourses.styles'
const CourseTable = ({ subjectData, subject }) => {
  const filteredData = subjectData.filter(
    (data) => data.subjectTitle === subject,
  )

  return (
    <div>
      {filteredData.map((filteredSubject) => (
        <div key={filteredSubject.subjectTitle}>
          <h1>{filteredSubject.subjectTitle}</h1>
          <FilteredTable>
            {filteredSubject.years.map((year) => (
              <div key={year.yearTitle}>
                <h4>{year.yearTitle}</h4>
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

import React from 'react'

const CourseTable = ({ subjectData }) => {
  return (
    <div>
      {subjectData.map((subject) => (
        <div key={subject.subjectTitle}>
          <h1>{subject.subjectTitle}</h1>
          {subject.years.map((year) => (
            <div key={year.yearTitle}>
              <h2>{year.yearTitle}</h2>
              {year.semesters.map((semester) => (
                <table id='customers' key={semester.semesterTitle}>
                  <thead>
                    <tr>
                      <th>{semester.semesterTitle}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {semester.subjects.map((subject, index) => (
                        <td key={index}>{subject}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CourseTable

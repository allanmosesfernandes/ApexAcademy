import React from 'react'

const CourseTable = ({ courseData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Semester</th>
          <th>Subjects</th>
        </tr>
      </thead>
      <tbody>
        {courseData.map((course) =>
          course.semesters.map((semester, index) => (
            <tr key={index}>
              {index === 0 && (
                <td rowSpan={course.semesters.length}>{course.courseTitle}</td>
              )}
              <td>{semester.semesterTitle}</td>
              <td>{semester.subjects.join(', ')}</td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  )
}

export default CourseTable

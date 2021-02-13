import React from 'react';


function Student({ student, selectStudent, deleteStudent }) {
    return (
      <div className="student" key={ student.id }>
        <h3 className="full-name-description">Student's full name:  <span className="first-name">{ student.firstName }</span> <span className="last-name">{ student.lastName }</span></h3>
        <h6>Current grade: <span className="grade-level">{ student.grade }</span></h6>
        <button className="select-student-button" onClick={ () => selectStudent(student) }>Edit student</button>
        <button onClick={ () => deleteStudent(student.id) }>Delete Student</button>
      </div>
    )
  }

  export default Student;
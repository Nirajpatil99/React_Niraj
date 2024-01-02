import React from 'react'

function StudentDetail() {
    const studentmarks=[
        {id:1, name:'Niraj', marks:75},
        {id:2, name:'Yash', marks:67},
        {id:3, name:'tejas', marks:85},
        {id:4, name:'Sorubh', marks:87},
    ]
  return (
    <div>
        <h2>StudentDetail</h2>
        <ul>
        {studentmarks.map((student) => (
          <li key={student.id}>
            <h3>ID:</h3> {student.id} 
            <h3>Name:</h3> {student.name} 
            <h3>Subject:</h3> {student.subject} 
            <h3>Marks:</h3> {student.marks} 
            <hr />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default StudentDetail
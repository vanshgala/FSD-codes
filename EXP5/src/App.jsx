import React from 'react';
function Student(props) {
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <p>Roll No: {props.rollNo}</p>
      <p>Branch: {props.branch}</p>
      <p>Status: <strong>{props.isPassed ? "✅ Passed" : "❌ Failed"}</strong></p>
    </div>
  );
}
function App() {
  const studentList = [
    { id: 101, name: "Amit Sharma", branch: "CS", passed: true },
    { id: 102, name: "Priya Rai", branch: "IT", passed: true },
    { id: 103, name: "Rahul Verma", branch: "ECE", passed: false }
  ];
  return (
    <div>
      <h1>College Student Roster</h1>
      <p>Displaying data passed via React Props</p>
      <div>
        {studentList.map((student) => {
          return (
            <Student
              key={student.id}
              name={student.name}
              rollNo={student.id}
              branch={student.branch}
              isPassed={student.passed}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;

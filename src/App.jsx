// import { useState } from 'react'
import { useState } from 'react'
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import Table from "./component/Table"
import ModalStudent from './component/ModalStudent'

function App() {
  const [copied, setCopied] = useState(false)
  // Moving the students data from Table component to App component
  const [students, setStudents] = useState([
    { id: 1, name: "Abu", class: "Science", fee: "RM150" },
    { id: 2, name: "Ali", class: "Science", fee: "RM150" },
    { id: 3, name: "Hasan", class: "Math", fee: "RM150" },
    { id: 4, name: "Adam", class: "Science", fee: "RM150" },
    { id: 5, name: "Haikal", class: "Science", fee: "RM150" },
    { id: 6, name: "Zali", class: "Math", fee: "RM150" },
    { id: 7, name: "Arif", class: "Science", fee: "RM150" },
    { id: 8, name: "Lee", class: "Science", fee: "RM150" },
    { id: 9, name: "Choo", class: "Math", fee: "RM150" },
    { id: 10, name: "Shalini", class: "Math", fee: "RM150" },
  ]);

  function copyButton() {
    // Dynamically generate the text using the students data
    let studentFeesText = '';
    
    // Create a list of students and their fees
    students.forEach(student => {
      studentFeesText += `${student.name} - ${student.fee}\n\n`;
    });
    
    const formattedText = 
      `Payment Reminder - Due by 25th

Dear Parents,

We kindly remind you to complete your child's monthly payment by the 25th. Your timely cooperation is greatly appreciated.

Outstanding Fees:

${studentFeesText}If payment has already been made, please disregard this message. Thank you! 😊`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(formattedText);
    
    // toggle to true = show "Copied!"
    setCopied(true)
    
    // Hide notification after 1 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <>
      <Navbar/>
      <div className="m-5">
        <div className="flex flex-wrap flex-row gap-3 justify-start mb-5 md:flex md:flex-row md:justify-start">
          {copied ? (
            <Button buttonName="Copied!" onClick={copyButton} className={"btn btn-warning"}/>
          ) : (
            <Button buttonName="Bulk Reminder" onClick={copyButton} className={"btn btn-success"}/>
          )}
          <ModalStudent students={students} setStudents={setStudents}/>
        </div>
        <Table students={students} setStudents={setStudents}/>
      </div>
    </>
  )
}

export default App

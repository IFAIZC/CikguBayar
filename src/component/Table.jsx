import { useState } from "react"
import Dropdown from "./Dropdown"
import Button from "./Button"

export default function Table() {
  // Sample data array to be mapped through
  const [students, setStudents] = useState([
    { id: 1, name: "Abu", class: "Science", fee: "RM150" },
    { id: 2, name: "Harley", class: "Science", fee: "RM150" },
    { id: 3, name: "Abe", class: "Math", fee: "RM150" },
    { id: 4, name: "Martin", class: "Science", fee: "RM150" },
    { id: 5, name: "Cooper", class: "Science", fee: "RM150" },
    { id: 6, name: "Skrunch", class: "Computer Science", fee: "RM400" },
    { id: 7, name: "Ali", class: "Computer Science", fee: "RM400" },
    { id: 8, name: "Bunch", class: "Computer Science", fee: "RM130" },
    { id: 9, name: "Lee Kang", class: "Computer Science", fee: "RM190" },
    { id: 10, name: "Shin Jiz", class: "Computer Science", fee: "RM250" },
    // Additional data rows from the original table are now handled by the map function
  ]);

  return (
    <div className="rounded-box border border-base-content/5 bg-base-100">
      {/* Added a fixed height container with both horizontal and vertical scrolling */}
      <div className="overflow-x-auto overflow-y-auto h-[calc(90vh-200px)]">
        <table className="table relative">
          {/* head - made sticky with top-0 */}
          <thead className="sticky -top-1 z-30 bg-base-100">
            <tr>
              <th className="sticky -left-1 z-20 bg-base-100">No.</th>
              <th className="sticky left-12 z-20 bg-base-100">Name</th>
              <th>Class</th>
              <th>Fee</th>
              <th className="justify-center flex">Status</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="items-center justify-center">
            {/* Map through the students array to generate table rows */}
            {students.map((student) => (
              <tr key={student.id}>
                <th className="sticky -left-1 z-20 bg-base-100">{student.id}</th>
                <td className="sticky left-12 z-20 bg-base-100">{student.name}</td>
                <td>{student.class}</td>
                <td>{student.fee}</td>
                <td><Dropdown/></td>
                <td><Button buttonName="Delete" className="btn btn-error"/></td>
                <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
                <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
                <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
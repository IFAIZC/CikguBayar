import Dropdown from "./Dropdown"
import Button from "./Button"
import { useState , useEffect } from "react"
import supabase from "../../supabaseClient";

export default function Table() {

  const [studentData,setStudentData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      // use await supabase.auth() to fetch the current logged user ******
    const { data, error } = await supabase
        .from("student_info")
        .select("*")

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setStudentData(data);
        console.log("Fetched student_info:", data);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="rounded-box border border-base-content/5 bg-base-100">
      {/* Added a fixed height container with both horizontal and vertical scrolling */}
      <div className="overflow-x-auto overflow-y-auto h-[calc(100vh-200px)]">
        <table className="table relative">
          {/* head - made sticky with top-0 */}
          <thead className="sticky -top-1 z-30 bg-base-100">
            <tr>
              <th className="sticky -left-1 z-20 bg-base-100">No.</th>
              <th className="sticky left-12 z-20 bg-base-100">Name</th>
              <th>Class</th>
              <th>Fee</th>
              <th className="justify-start ml-5 flex">Status</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="items-center justify-center">
            {studentData.map((student) => (
              <tr key={student.id}>
                <th className="sticky -left-1 z-20 bg-base-100">{student.id}</th>
                <td className="sticky left-12 z-20 bg-base-100">{student.student_name}</td>
                <td>{student.class}</td>
                <td>{student.fee}</td>
                <td><Dropdown/></td>

                {/* GOING TO MAKE ALL THESE BUTTON FUNCTIONAL ONCE SUPABSE IS LIVE */}
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
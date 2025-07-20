import Dropdown from "./Dropdown"
import Button from "./Button"
import { useState , useEffect } from "react"
import supabase from "../../supabaseClient";
import Toggle from "./Toggle";

export default function Table() {

  const [studentData,setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
    const { data, error } = await supabase
        .from("student")
        .select("*")

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setStudentData(data);
        setLoading(false)
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
              <th className="justify-start  flex">Status</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center py-20">
                  <div className="flex flex-col items-center justify-center min-h-80">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4 text-base-content/70">Loading students...</p>
                  </div>
                </td>
              </tr>
            ) : studentData.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-20">
                  <div className="flex flex-col items-center justify-center min-h-80">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-lg font-medium text-base-content/70">No students found</p>
                    <p className="text-sm text-base-content/50 mt-2">Please add students to get started!</p>
                  </div>
                </td>
              </tr>
            ) : (
              studentData.map((student,index) => (
                <tr key={student.id}>
                  <th className="sticky -left-1 z-20 bg-base-100">{index+1}</th>
                  <td className="sticky left-12 z-20 bg-base-100">{student.student_name}</td>
                  <td>{student.class}</td>
                  <td>{student.fee}</td>
                  <td><Toggle/></td>

                  {/* GOING TO MAKE ALL THESE BUTTON FUNCTIONAL ONCE SUPABSE IS LIVE */}
                  <td><Button buttonName="Delete" className="btn btn-error"/></td>
                  <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
                  <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
                  <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
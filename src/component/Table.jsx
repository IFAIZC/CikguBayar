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
    const {data:{user}, error} = await supabase.auth.getUser(); // added auth.getUser to fetch the user.id students only!
    const { data: userData, error: userError } = await supabase
        .from("student")
        .select("*")
        .eq("user_id", user.id)
      
      if (error) {
        console.error("Error fetching user:", error)
      }

      if (userError) {
        console.error("Error fetching data:", userError);
      } else {
        setStudentData(userData);
        setLoading(false)
        console.log("Fetched student_info:", userData);
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
              <th className="text-center">Class</th>
              <th className="text-center">Fee</th>
              <th className="text-center">Status</th>
              <th className="text-center">Delete</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Remind</th>
              <th className="text-center">Invoice</th>
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
                  <td className="text-center">{student.class}</td>
                  <td className="text-center">{student.fee}</td>
                  <td>
                    <div className="flex justify-center">
                      <Toggle/>
                    </div>
                  </td>

                  {/* to make delete button functional soon! 20/7/2025 - today */}
                  <td>
                    <div className="flex justify-center">
                      <Button buttonName="Delete" className="btn btn-error"/>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Button buttonName="Edit" className="btn btn-soft btn-info"/>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Button buttonName="Remind" className="btn btn-soft btn-warning"/>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <Button buttonName="Invoice" className="btn btn-soft btn-success"/>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
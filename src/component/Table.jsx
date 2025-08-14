import { useState , useEffect } from "react"
import supabase from "../../supabaseClient";
import Checkbox from "./Checkbox";

export default function Table() {

  // to add year date now
  const [studentData,setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user:", userError);
        return;
      }

      // Fetch students
      const { data: userData, error: studentError } = await supabase
        .from("student")
        .select("*")
        .eq("user_id", user.id);

      if (studentError) {
        console.error("Error fetching students:", studentError);
        return;
      }

      setStudentData(userData);

      // // Get all student IDs
      // const studentIds = userData.map((s) => s.id);

      // // Fetch payment records
      // const { data: payments, error: paymentError } = await supabase
      //   .from("payment")
      //   .select("*")
      //   .in("student_id", studentIds);

      // if (paymentError) {
      //   console.error("Error fetching payments:", paymentError);
      // } else {
      //   // Organize payment data by student and month
      //   // ***to study this and why this was coded like this***
      //   const paymentMap = {};

      //   payments.forEach(payment => {
      //     if (!paymentMap[payment.student_id]) {
      //       paymentMap[payment.student_id] = {};
      //     }
      //     paymentMap[payment.student_id][payment.month] = payment;
      //   });

      //   setStudentPayments(paymentMap);
      // }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-box border border-base-content/5 bg-base-100"> 
      {/* Added a fixed height container with both horizontal and vertical scrolling */}
      <div className="overflow-x-auto overflow-y-auto h-[calc(100vh-200px)]">
        <table className="table relative">
          {/* head - made sticky with top-0 */}
          <thead className="sticky -top-1 z-30 bg-base-100">
            <tr>
              <th className="sticky -left-1 z-20 min-w-20 bg-base-100">No.</th>
              <th className="sticky left-12 z-20 min-w-20 bg-base-100">Name</th>
              <th className="min-w-30">Grade</th>
              <th className="text-center min-w-30">Fee</th>
              {/*  */}
              <th className="text-center min-w-30">January</th>
              <th className="text-center min-w-30">February</th>
              <th className="text-center min-w-30">March</th>
              <th className="text-center min-w-30">April</th>
              <th className="text-center min-w-30">May</th>
              <th className="text-center min-w-30">June</th>
              <th className="text-center min-w-30">July</th>
              <th className="text-center min-w-30">August</th>
              <th className="text-center min-w-30">September</th>
              <th className="text-center min-w-30">November</th>
              <th className="text-center min-w-30">October</th>
              <th className="text-center min-w-30">December</th>
              {/*  */}
              {/* <th className="text-center">Delete</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Remind</th>
              <th className="text-center">Invoice</th> */}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="17" className="text-center py-20">
                  <div className="flex flex-col items-center justify-center min-h-80">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4 text-base-content/70">Loading students...</p>
                  </div>
                </td>
              </tr>
            ) : studentData.length === 0 ? (
              <tr>
                <td colSpan="17" className="text-center py-20">
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
                  <td className="">{student.class}</td>
                  <td className="text-center">{student.fee}</td>

                  {/* Monthly payment checkboxes */}
                  <td>
                    {/* jan */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="january" 
                    />
                  </td>
                  <td>
                    {/* feb */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="february" 
                    />
                  </td>
                  <td>
                    {/* march */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="march" 
                    />
                  </td>
                  <td>
                    {/* april */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="april" 
                    />
                  </td>
                  <td>
                    {/* may */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="may" 
                    />
                  </td>
                  <td>
                    {/* june */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="june" 
                    />
                  </td>
                  <td>
                    {/* july */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="july" 
                    />
                  </td>
                  <td>
                    {/* august */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="august" 
                    />
                  </td>
                  <td>
                    {/* september */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="september" 
                    />
                  </td>
                  <td>
                    {/* november */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="november" 
                    />
                  </td>
                  <td>
                    {/* oct */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="october" 
                    />
                  </td>
                  <td>
                    {/* december */}
                    <Checkbox 
                    student_name={student.student_name}
                    month="december" 
                    />
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
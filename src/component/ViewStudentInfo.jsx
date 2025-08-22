export default function ViewStudentInfo({studentData}) {

  return(
    <>
      <div className="dropdown dropdown-hover dropdown-right">
        <div tabIndex={0} role="button" className="m-1 cursor-pointer hover:text-success">
          {studentData.student_name}
        </div>
        <div
          tabIndex={0}
          className="dropdown-content absolute left-0 mt-2 card card-sm bg-base-300 z-[9999] w-64 shadow-md">
          <div className="card-body">
            <h3 className="font-semibold text-lg mb-2">{studentData.student_name}</h3>
            {/* <p><span className="font-medium">Name:</span> {studentData.student_name}</p> */}
            <p><span className="font-bold">Grade:</span> {studentData.class}</p>
            <p><span className="font-bold">Monthly Fee:</span> RM{studentData.fee}</p>
            <p><span className="font-bold">Parent's Contact:</span> {studentData.contact_number}</p>
            <p><span className="font-bold">Date Join:</span> {studentData.date_join ? studentData.date_join : <span>N/A</span>}</p>
            <p><span className="font-bold">Date End:</span> {studentData.date_end ? studentData.date_end : <span>N/A</span>}</p>
            <div className="flex gap-2 mt-3">
              <button className="btn btn-success btn-disabled">Edit</button>
              <button className="btn btn-success btn-disabled">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
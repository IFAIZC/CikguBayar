import { useState } from "react"
import supabase from "../../supabaseClient";

export default function ModalStudent() {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [fee, setFee] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dateJoin, setDateJoin] = useState("")
  const [dateEnd, setDateEnd] = useState("")

  async function submitInfo(e) {
     e.preventDefault();
    if (!studentName || !className || !fee || !contactNumber) {
      alert("Please fill in all fields!");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    const {data,error} = await supabase
    .from('student')
    .insert([{
      user_id : user.id,
      student_name: studentName,
      class: className,
      fee: fee,
      contact_number: contactNumber,
      date_join: dateJoin,
      date_end: dateEnd,
    }]);

    if (error) {
    console.error('Error creating student', error);
  } else {
    setStudentName('');
    setClassName('');
    setFee('');
    setContactNumber('');
    console.log('Student created', data);
    window.location.href = '/dashboard'; //to redirect/refresh the page once submit.
    }
  };

  function submitName(e) {
    setStudentName(e.target.value)
  }
  function submitClassName(e) {
    setClassName(e.target.value)
  }
  function submitFee(e) {
    setFee(e.target.value)
  }
  function submitNumber(e) {
    setContactNumber(e.target.value)
  }
  function submitJoinDate(e) {
    setDateJoin(e.target.value)
  }
  function submitEndDate(e) {
    setDateEnd(e.target.value)
  }

  return(
    <>
      <label htmlFor="my_modal_7" className="btn btn-success">Add Student</label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" style={{ maxWidth: "300px" }}>
              <form onSubmit={submitInfo}>
                <fieldset className="fieldset">
                  <label className="label">Student's Name</label>
                  <input type="text" className="input mb-3" placeholder="Student Name" value={studentName} onChange={submitName}/>

                  <label className="label">Grade</label>
                  <select defaultValue="" className="select mb-3" onChange={submitClassName}>
                    <option disabled={true} value="">Choose Grade</option>
                    <option value="Standard 1">Standard 1</option>
                    <option value="Standard 2">Standard 2</option>
                    <option value="Standard 3">Standard 3</option>
                    <option value="Standard 4">Standard 4</option>
                    <option value="Standard 5">Standard 5</option>
                    <option value="Form 1">Form 1</option>
                    <option value="Form 2">Form 2</option>
                    <option value="Form 3">Form 3</option>
                    <option value="Form 4">Form 4</option>
                    <option value="Form 5">Form 5</option>
                  </select>

                  <label className="label">Fee</label>
                  <input type="number" className="input mb-3" placeholder="Total Fee" value={fee} onChange={submitFee}/>

                  <label className="label">Parent's Contact Number</label>
                  <input type="tel" className="input mb-3" placeholder="Contact Number" value={contactNumber} onChange={submitNumber} />

                  <label className="label">Joined Date</label>
                  <input type="date" className="input mb-3" onChange={submitJoinDate} />

                  <label className="label">End Date</label>
                  <input type="date" className="input mb-3" onChange={submitEndDate}/>

                  <button className="btn btn-neutral mt-4" type="submit">Submit</button>
                </fieldset>
              </form>
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  )
}
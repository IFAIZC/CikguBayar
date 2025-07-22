import { useState } from "react"
import supabase from "../../supabaseClient";

export default function ModalStudent() {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [fee, setFee] = useState("");
  const [contactNumber, setContactNumber] = useState("");

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
                  <label className="label">Subject</label>
                  <input type="text" className="input mb-3" placeholder="Subject" value={className} onChange={submitClassName} />
                  <label className="label">Fee</label>
                  <input type="number" className="input mb-3" placeholder="Total Fee" value={fee} onChange={submitFee}/>
                  <label className="label">Parent's Contact Number</label>
                  <input type="tel" className="input mb-3" placeholder="Contact Number" value={contactNumber} onChange={submitNumber} />
                  <button className="btn btn-neutral mt-4" type="submit">Submit</button>
                </fieldset>
              </form>
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  )
}
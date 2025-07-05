export default function ModalStudent() {
  return(
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn btn-success">Add Student</label>

      {/* Modal */}
      {/* GOING TO INSERT DATA TO SUPABASE */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" style={{ maxWidth: "300px" }}>
                <fieldset className="fieldset">
                  <label className="label">Student's Name</label>
                  <input type="text" className="input mb-3" placeholder="Student Name"/>
                  <label className="label">Class</label>
                  <input type="text" className="input mb-3" placeholder="Class" />
                  <label className="label">Fee</label>
                  <input type="text" className="input mb-3" placeholder="Total Fee" />
                  <label className="label">Parent's Contact Number</label>
                  <input type="text" className="input mb-3" placeholder="Contact Number" />
                  <button className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  )
}
export default function ModalStudent() {
  return(
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn btn-success">Add Student</label>

      {/* Modal */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box" style={{ maxWidth: "300px" }}>
                <fieldset className="fieldset">
                  <label className="label">Student's Name</label>
                  <input type="text" className="input" placeholder="Student Name" />
                  <label className="label">Class</label>
                  <input type="text" className="input" placeholder="Class" />
                  <label className="label">Fee</label>
                  <input type="text" className="input" placeholder="Total Fee" />
                  <button className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  )
}
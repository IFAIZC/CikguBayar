// import { useState } from 'react'
import { useState } from 'react'
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import Table from "./component/Table"

function App() {
  const [copied, setCopied] = useState(false)

  function copyButton() {
    const formattedText = 
      `Payment Reminder - Due by 25th

Dear Parents,

We kindly remind you to complete your child's monthly payment by the 25th. Your timely cooperation is greatly appreciated.

Outstanding Fees:

Abu - RM150

Harley - RM150

Abe - RM150

Martin - RM150

Cooper - RM150

Skrunch - RM400

If payment has already been made, please disregard this message. Thank you! 😊`
;
    
    // Copy to clipboard
    navigator.clipboard.writeText(formattedText);
    
    // toggle to true = show "Copied!"
    setCopied(true)
    
    // Hide notification after 1 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <>
      <Navbar/>
      <div className="m-5">
        <div className="flex flex-wrap flex-row gap-3 justify-start mb-5 md:flex md:flex-row md:justify-start">
          {copied ? (
            <Button buttonName="Copied!" onClick={copyButton} className={"btn btn-warning"}/>
          ) : (
            <Button buttonName="Bulk Reminder" onClick={copyButton} className={"btn btn-success"}/>
          )}

          {/* The button to open modal */}
          <label htmlFor="my_modal_7" className={"btn btn-success"}>Add Student</label>

          {/* Modal */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
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
                </div>
              </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>
        </div>
        <Table/>
      </div>
    </>
  )
}

export default App

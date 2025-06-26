// import { useState } from 'react'
import { useState } from 'react'
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import Table from "./component/Table"

function App() {
  const [copied, setCopied] = useState(false)

  function copyButton() {
    const formattedText = 
      `Greetings! Please complete your payment before 25th. Your cooperation is highly appreciated.

name: Abu, fee: RM150
name: Harley, fee: RM150
name: Abe, fee: RM150
name: Martin, fee: RM150
name: Cooper, fee: RM150
name: Skrunch, fee: RM400

If you have made the payment, please disregard this message. Thank you.
      `;
    
    // Copy to clipboard
    navigator.clipboard.writeText(formattedText);
    
    // toggle to true = show "Copied!"
    setCopied(true)
    
    // Hide notification after 1 seconds
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <>
      <Navbar/>
      <div className="m-5">
        <div className="flex flex-wrap flex-col gap-2 justify-center mb-5">
          {copied ? (
            <Button buttonName="Copied!" onClick={copyButton} className={"btn btn-success"}/>
          ) : (
            <Button buttonName="Bulk Reminder" onClick={copyButton} className={"btn btn-success"}/>
          )}
          <Button buttonName="Bulk Invoice" className={"btn btn-success"}/>
          <Button buttonName="Add Student" className={"btn btn-success"}/>
        </div>
        <Table/>
      </div>
    </>
  )
}

export default App

// import { useState } from 'react'
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import Table from "./component/Table"

function App() {

  return (
    <>
      <Navbar/>
      <div className="m-5">
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          <Button buttonName="Bulk Reminder" className={"btn btn-success"}/>
          <Button buttonName="Bulk Invoice" className={"btn btn-success"}/>
          <Button buttonName="Add Student" className={"btn btn-success"}/>
        </div>
        <Table/>
      </div>
    </>
  )
}

export default App

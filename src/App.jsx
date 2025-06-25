// import { useState } from 'react'
import Button from "./component/Button"
import Navbar from "./component/Navbar"
import Table from "./component/Table"

function App() {

  return (
    <>
      <Navbar/>
      <div className="m-5">
        <Button buttonName="Send Reminder"/>
        <Button buttonName="Send Invoice"/>
        <Button buttonName="Add Student"/>
        <Button buttonName="Remove Student"/>
        <Table/>
      </div>
    </>
  )
}

export default App

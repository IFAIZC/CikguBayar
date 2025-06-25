// import { useState } from 'react'
import Button from "./component/Button"
import Navbar from "./component/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <Button buttonName="Send Reminder"/>
      <Button buttonName="Send Invoice"/>
      <Button buttonName="Add Student"/>
      <Button buttonName="Remove Student"/>
    </>
  )
}

export default App

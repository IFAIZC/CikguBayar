import Navbar from "../component/Navbar"
import Table from "../component/Table"
import ModalStudent from '../component/ModalStudent'
import Button from "../component/Button"
import Practice from "../component/Practice"
import YearDropDown from "../component/YearDropDown"
import { useState } from "react"

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  return (
    <div>
      <Navbar/>
      <div className="m-5">
        <div className="flex justify-between">
          <div className="flex flex-wrap flex-row gap-3 justify-start mb-5 md:flex md:flex-row md:justify-start">
            <Button buttonName="Bulk Reminder" className={"btn btn-success"}/>
            <ModalStudent/>
          </div>
          <YearDropDown selectedYear={selectedYear} onYearChange={setSelectedYear}/>
        </div>
        <Table selectedYear={selectedYear}/>
      </div>
      {/* <Practice/> */}
    </div>
  )
}
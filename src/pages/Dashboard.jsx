import Navbar from "../component/Navbar"
import Table from "../component/Table"
import ModalStudent from '../component/ModalStudent'
import Button from "../component/Button"
import Practice from "../component/Practice"
import YearDropDown from "../component/YearDropDown"

export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className="m-5">
        <div className="flex justify-between">
          <div className="flex flex-wrap flex-row gap-3 justify-start mb-5 md:flex md:flex-row md:justify-start">
            <Button buttonName="Bulk Reminder" className={"btn btn-success"}/>
            <ModalStudent/>
          </div>
          <YearDropDown/>
        </div>
        <Table/>
      </div>
      {/* <Practice/> */}
    </div>
  )
}
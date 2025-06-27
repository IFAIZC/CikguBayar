import Dropdown from "./Dropdown"
import Button from "./Button"

export default function Table() {
  return (
    <div className="rounded-box border border-base-content/5 bg-base-100">
      {/* Added a fixed height container with both horizontal and vertical scrolling */}
      <div className="overflow-x-auto overflow-y-auto h-[calc(100vh-200px)]">
        <table className="table relative">
          {/* head - made sticky with top-0 */}
          <thead className="sticky -top-1 z-30 bg-base-100">
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">No.</th>
              <th className="sticky left-12 z-20 bg-base-100">Name</th>
              <th>Class</th>
              <th>Fee</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="items-center justify-center">
            {/* row 1 */}
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">1</th>
              <td className="sticky left-12 z-20 bg-base-100">Abu</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit"className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">2</th>
              <td className="sticky left-12 z-20 bg-base-100">Harley</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">3</th>
              <td className="sticky left-12 z-20 bg-base-100">Abe</td>
              <td>Math</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">4</th>
              <td className="sticky left-12 z-20 bg-base-100">Martin</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">5</th>
              <td className="sticky left-12 z-20 bg-base-100">Cooper</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit"className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">6</th>
              <td className="sticky left-12 z-20 bg-base-100">Skrunch</td>
              <td>Computer Science</td>
              <td>RM400</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">5</th>
              <td className="sticky left-12 z-20 bg-base-100">Cooper</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit"className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">6</th>
              <td className="sticky left-12 z-20 bg-base-100">Skrunch</td>
              <td>Computer Science</td>
              <td>RM400</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">5</th>
              <td className="sticky left-12 z-20 bg-base-100">Cooper</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit"className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">6</th>
              <td className="sticky left-12 z-20 bg-base-100">Skrunch</td>
              <td>Computer Science</td>
              <td>RM400</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">5</th>
              <td className="sticky left-12 z-20 bg-base-100">Cooper</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit"className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">6</th>
              <td className="sticky left-12 z-20 bg-base-100">Skrunch</td>
              <td>Computer Science</td>
              <td>RM400</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">5</th>
              <td className="sticky left-12 z-20 bg-base-100">Cooper</td>
              <td>Science</td>
              <td>RM150</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit"className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
            <tr>
              <th className="sticky left-0 z-20 bg-base-100">6</th>
              <td className="sticky left-12 z-20 bg-base-100">Skrunch</td>
              <td>Computer Science</td>
              <td>RM400</td>
              <td><Dropdown/></td>
              <td><Button buttonName="Delete" className="btn btn-error"/></td>
              <td><Button buttonName="Edit" className="btn btn-soft btn-info"/></td>
              <td><Button buttonName="Remind" className="btn btn-soft btn-warning"/></td>
              <td><Button buttonName="Invoice" className="btn btn-soft btn-success"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
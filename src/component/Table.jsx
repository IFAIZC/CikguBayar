import Dropdown from "./Dropdown"
import Button from "./Button"

export default function Table() {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Class</th>
            <th>Fee</th>
            <th>Status</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="items-center justify-center ">
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Abu</td>
            <td>Science</td>
            <td>RM150</td>
            <td><Dropdown/></td>
            <td><Button buttonName="Delete"/></td>
            <td><Button buttonName="Update"/></td>
            <td><Button buttonName="Remind"/></td>
            <td><Button buttonName="Invoice"/></td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Harley</td>
            <td>Science</td>
            <td>RM150</td>
            <td><Dropdown/></td>
            <td><Button buttonName="Delete"/></td>
            <td><Button buttonName="Update"/></td>
            <td><Button buttonName="Remind"/></td>
            <td><Button buttonName="Invoice"/></td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Abe</td>
            <td>Math</td>
            <td>RM150</td>
            <td><Dropdown/></td>
            <td><Button buttonName="Delete"/></td>
            <td><Button buttonName="Update"/></td>
            <td><Button buttonName="Remind"/></td>
            <td><Button buttonName="Invoice"/></td>
          </tr>
          <tr>
            <th>4</th>
            <td>Martin</td>
            <td>Science</td>
            <td>RM150</td>
            <td><Dropdown/></td>
            <td><Button buttonName="Delete"/></td>
            <td><Button buttonName="Update"/></td>
            <td><Button buttonName="Remind"/></td>
            <td><Button buttonName="Invoice"/></td>
          </tr>
          <tr>
            <th>5</th>
            <td>Cooper</td>
            <td>Science</td>
            <td>RM150</td>
            <td><Dropdown/></td>
            <td><Button buttonName="Delete"/></td>
            <td><Button buttonName="Update"/></td>
            <td><Button buttonName="Remind"/></td>
            <td><Button buttonName="Invoice"/></td>
          </tr>
          <tr>
            <th>6</th>
            <td>Skrunch</td>
            <td>Computer Science</td>
            <td>RM400</td>
            <td><Dropdown/></td>
            <td><Button buttonName="Delete"/></td>
            <td><Button buttonName="Update"/></td>
            <td><Button buttonName="Remind"/></td>
            <td><Button buttonName="Invoice"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
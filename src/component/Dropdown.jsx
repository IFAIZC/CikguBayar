import { useState } from "react"
import supabase from "../../supabaseClient"

export default function Dropdown({ student_id }) {
  const [status, setStatus] = useState("")

  const handleChange = async (e) => {
    const selectedValue = e.target.value === "true"; // converts string to boolean
    setStatus(selectedValue);

    const { error } = await supabase
      .from("payment")
      .insert({
        student_id: student_id,
        january: selectedValue,
      });

    if (error) {
      console.error("Update failed:", error.message);
    }
  };

  return (
    <select
      defaultValue=""
      className="select select-ghost w-30"
      onChange={handleChange}
      value={status}
    >
      <option className="text-center" value={false}>❌ UNPAID</option>
      <option className="text-center" value={true}>✅ PAID</option>
    </select>
  )
}

// inserting is OK
// but it will duplicate (if user mistakenly update, return back to unpaid will create duplicates. supposedly UPDATE! Need to use upsert instead!)
// status is updated, but once refresh, the "paid status" is gone upon refreshing. need to fetch!!
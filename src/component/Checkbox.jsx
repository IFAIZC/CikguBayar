import { useState } from "react";
import supabase from "../../supabaseClient";

export default function Checkbox({ studentId, month, initialPaid }) {
  // const [checked, setChecked] = useState(initialPaid);

  // const handleChange = async (e) => {
  //   const newValue = e.target.checked;
  //   setChecked(newValue);

  //   const { error } = await supabase
  //     .from("payment") // adjust if you use a separate table
  //     .insert({ [month]: newValue }) // dynamic column name
  //     .eq("id", studentId);

  //   if (error) {
  //     console.error("Failed to update payment:", error.message);
  //     setChecked(!newValue); // rollback if needed
  //   }
  // };

  // const [checked, setChecked] = useState(false)

  async function updateStatus() {
    const {error} = await supabase
    .from("payment")
    .insert([{
      january:true,
    }])

    if (error) {
      console.log("Updating payment status is unsuccessful", error)
    }
  }

  return (
    <div className="flex justify-center">
      <input
        type="checkbox"
        onChange={updateStatus}
        className="checkbox checkbox-success"
      />
    </div>
  );
}

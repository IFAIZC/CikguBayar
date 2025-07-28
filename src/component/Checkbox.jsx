import supabase from "../../supabaseClient";
import { useState } from "react";
import { ReceiptText } from "lucide-react";

export default function Checkbox() {

  // My goal :
  // checkbox is disabled
  // receipt insert button beside checkboxe
  // once user INSERT a file , state from false to true.
  // checkboxes will CHECKED once detected a file > 1 is inserted

  const [payment, setPayment] = useState(false)

  return (
    <div className="flex justify-center">
      {payment ? 
      <div className="flex flex-row gap-2">
        <input
        type="checkbox"
        // onChange={checkPayment}
        className="checkbox checkbox-success"
        disabled defaultChecked
      />
      <ReceiptText className="opacity-90" color="gray"/>
      </div>
      : 
      <div className="flex flex-row gap-2">
        <input
        type="checkbox"
        // onChange={checkPayment}
        className="checkbox checkbox-success"
        disabled
        />
        <ReceiptText className="opacity-90" color="gray"/>
      </div>
      }
    </div>
  );
}
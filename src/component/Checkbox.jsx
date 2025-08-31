import { useState, useEffect } from "react";
import { ReceiptText } from "lucide-react";
import supabase from "../../supabaseClient";

export default function Checkbox({ student_name, month, year }) {
  const [uploading, setUploading] = useState(false);
  const [receiptExists, setReceiptExists] = useState(false);
  const [loading, setLoading] = useState(true);

  const [paid,setPaid] = useState(false)

  // we write this outside of useEffect, so we can re-use it under useEffect later
  // this async function fetch data from receipts, to check if student and month name has paid
  // if paid, checked the box, else, remain unchecked.
  async function checkReceipt() {
    const { data, error } = await supabase
      .from("receipts")
      .select("*")
      .eq("student_name", student_name)
      .eq("month", month)
      .eq("year", year)
      .maybeSingle();

    // edge case, if error, show this error to debug it easier.
    if (error) {
      console.error("Error fetching receipts:", error);
    }

    // if we got the data, pass the data to setReceiptExists, so that we can use receiptExists later on to toggle true or false.
    if (data) {
      setReceiptExists(true);
      setPaid(true)
    } else {
      setReceiptExists(false); // ensure it's reset if not found
      setPaid(false)
    }

    // if i have loading animation, this will toggle 
    setLoading(false);
  }

  useEffect(() => {
    // calling out checkreceipt function under useEffect. so that this will run AFTER the component mounted.
    checkReceipt();
  }, [student_name, month, year]);

  async function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      console.log("Fetching user failed:", userError?.message || "No user found");
      setUploading(false);
      return;
    }

    const filePath = `${student_name}-${month}-user-${user.id}/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("receipts")
      .upload(filePath, file);

    if (error) {
      console.error("File upload failed:", error.message);
      setUploading(false);
      return;
    }

    const { error: dbError } = await supabase.from("receipts").insert({
      user_id: user.id,
      student_name: student_name,
      month: month,
      year: year,
      file_path: data.path
    });

    if (dbError) {
      console.error("Saving receipt info failed:", dbError.message);
      setUploading(false);
      return;
    }

    // ✅ Recheck the receipt immediately after uploading
    await checkReceipt();
    setUploading(false);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="checkbox"
        className="checkbox checkbox-success"
        disabled={!receiptExists} //if false, remain disabled/unchecked
        checked={receiptExists} //if true, checked
        readOnly
      />
      <label className="cursor-pointer relative">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
        <ReceiptText className={uploading ? "opacity-50" : ""} />
      </label>

      {paid ? 
      <button className="cursor-pointer relative">
        <img src="/whatsapp.svg" alt="ws logo" className="w-6 h-6"/>
        {/* need to link phone number and whatsapp API to bring to whatsapp */}
      </button>
      :
      <button className="cursor-not-allowed disabled">
        <img src="/whatsapp-svgrepo-com.svg" alt="ws logo" className="w-6 h-6"/>
      </button>
    }

    </div>
  );
}

import { useState } from "react";
import { ReceiptText } from "lucide-react";
import supabase from "../../supabaseClient";

export default function Checkbox({ studentId, month, receipt }) {
  const [payment, setPayment] = useState(receipt ? 1 : 0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const filePath = `${studentId}/${month}-${file.name}`;

    // Upload file to Supabase Storage
    const { data, error: uploadError } = await supabase.storage
      .from("receipts")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      alert("Upload failed!");
      console.error(uploadError);
      setUploading(false);
      return;
    }

    // Get public URL of the file
    const { data: urlData } = supabase.storage
      .from("receipts")
      .getPublicUrl(filePath);

    const receiptUrl = urlData.publicUrl;

    // Insert new row into payment table
    const { error: insertError } = await supabase
      .from("payment")
      .insert({
        student_id: studentId,
        month: month,
        receipt_url: receiptUrl,
      });

    if (insertError) {
      alert("Failed to save receipt to database");
      console.error(insertError);
    } else {
      setPayment(1); // ✅ Mark checkbox as checked
    }

    setUploading(false);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <input
        type="checkbox"
        className="checkbox checkbox-success"
        disabled
        checked={payment >= 1}
      />
      <label className="cursor-pointer">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <ReceiptText
          className={payment >= 1 ? "opacity-100" : "opacity-60"}
          color={payment >= 1 ? "green" : "gray"}
        />
      </label>

      {uploading && <span className="loading loading-spinner loading-xs"></span>}
    </div>
  );
}

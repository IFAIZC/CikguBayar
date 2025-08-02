import { useEffect, useState } from "react";
import { ReceiptText } from "lucide-react";
import supabase from "../../supabaseClient";

export default function Checkbox({ studentId, month, receipt }) {
  const [payment, setPayment] = useState(0);
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const filePath = `${studentId}/${month}/${file.name}`;

    // Upload file
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("receipts")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Upload failed:", uploadError.message);
      setUploading(false);
      return;
    }

    // Upload successful
    setPayment(1);
    setUploading(false);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      {payment === 1 ?
      <input
        type="checkbox"
        className="checkbox checkbox-success"
        disabled
        checked
      /> : 
      <input
        type="checkbox"
        className="checkbox checkbox-success"
        disabled
      />
    }
      
      <label className="cursor-pointer relative">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <ReceiptText
          className={`transition-opacity ${payment >= 1 ? "opacity-100" : "opacity-60"}`}
          color={payment >= 1 ? "green" : "gray"}
        />
        {uploading && (
          <span className="absolute text-xs text-gray-500 -bottom-5 left-1/2 -translate-x-1/2">
            uploading...
          </span>
        )}
      </label>
    </div>
  );
}

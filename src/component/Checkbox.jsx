import { useState } from "react";
import { ReceiptText } from "lucide-react";
import supabase from "../../supabaseClient";

export default function Checkbox({ student_name, month }) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);

    // Get the current logged-in user
    const {data: { user }, error: userError} = await supabase.auth.getUser();

    if (userError || !user) {
      console.log("Fetching user failed:", userError?.message || "No user found");
      setUploading(false);
      return;
    }

    const filePath = `user-${user.id}/${Date.now()}-${file.name}`;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("receipts")
      .upload(filePath, file);

    if (error) {
      console.error("File upload failed:", error.message);
      setUploading(false);
      return;
    }

    console.log("Uploaded file:", data.path);

    // Optionally, save metadata to your `receipts` table
    const { error: dbError } = await supabase.from("receipts").insert({
      user_id: user.id,
      student_name: student_name, // if you're tracking student per receipt
      month: month,
      file_path: data.path
    });

    if (dbError) {
      console.error("Saving receipt info failed:", dbError.message);
    }

    setUploading(false);
  }

  return (
    <div className="flex justify-center items-center gap-2">
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
    </div>
  );
}

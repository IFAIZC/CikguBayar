import { useState, useEffect } from "react";
import supabase from "../../supabaseClient";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      navigate('/');
    }
  };

    useEffect(() => {
      const fetchPic = async () => {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
          console.error("Error fetching user:", error.message);
          return;
        }

        const getName = user?.user_metadata?.name
        setUsername(getName); // 🔁 Update state, triggers re-render
      };

      fetchPic(); // ⏱️ Run once when component mounts
    }, []);

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <p className="font-bold text-2xl ml-3">CikguPay</p>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <p tabIndex={0} role="button" className="font-bold text-md">Welcome back, {username} !</p>

          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1">
            <div className="w-10 rounded-full">
              <img
                alt="User profile picture"
                src={profilePicture || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
            </div>
          </div> */}

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-1 w-52 p-2 shadow">
            <li><a className="text-base-content" onClick={signOut}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
import { useState, useEffect } from "react";
import supabase from "../../supabaseClient";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [profilePicture, setProfilePicture] = useState("");
  const navigate = useNavigate();

  // signOut function
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      navigate('/');
    }
  };

  // fetch data function
  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }

      const getPicture = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
      
      setProfilePicture(getPicture);
    };

    fetchUserData(); // run once when component mounts
  }, []);

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <p className="font-bold text-2xl ml-3">CikguPay</p>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="flex items-center gap-3">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1">
              <div className="w-10 rounded-full bg-white">
                <img
                  alt="User profile picture"
                  src={profilePicture || "/user_profile.svg"} />
              </div>
            </div>
          </div>

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
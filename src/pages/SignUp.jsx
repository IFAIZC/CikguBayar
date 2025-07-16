import supabase from "../../supabaseClient";
import GoogleAuthButton from "../component/GoogleAuthButton";

export default function SignUp() {

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.log("Auth error:", error.message);
  };

  return(
    <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center">
      <div className="mb-10">
        <h1 className="font-bold text-5xl lg:text-6xl">CikguPay</h1>
      </div>
      <GoogleAuthButton onClick={handleGoogleSignIn}/>
    </div>
  )
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AtSign, Phone, User, Eye, EyeOff } from "lucide-react"; // Import Eye and EyeOff
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"
import { Spinner } from "@/components/ui/spinner";

interface SignupPageProps {
  switchCss: boolean;
  setSwitchCss: (value: boolean) => void;
  setError: (value: string) => void;
  loading:boolean,
  setloading:(value:boolean)=>void;
}

const SignupPage: React.FC<SignupPageProps> =({ switchCss, setSwitchCss,setError ,loading,setloading}) => {
  // State for form fields
  const [fullname, setFullname] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for showing passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form submission
  const handleSubmit = async(e: React.FormEvent) => {
      setloading(true)
    e.preventDefault();

    // Basic validation
    if (!fullname || !mobileNumber || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setloading(false)
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setloading(false)
      return;
    }


    const result = await axios.post('/api/auth/signup/seller',{
        email,
        password,
        name:fullname,
        mobileNumber
    })
    console.log(result)
    if (!result) setError("Invalid email or password");
    else {
      toast.success(`Successful, you can login now.`)
    //   ${session.data?.user?.name}
      window.location.href = "/auth/seller"; // Redirect on success
    }
    
    // Reset form fields after submission
    setFullname("");
    setmobileNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setloading(false)
  };

  return (
    <>
      {!switchCss && (
        <div className="flex flex-col dark:text-gray-200 z-10 items-center justify-start pt-12 pl-14 gap-4 w-2/4">
          <div className="font-nunito text-4xl text-customTeal dark:text-Green font-extrabold">
            Sign Up
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <User className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setmobileNumber(e.target.value)}
              />
              <Phone className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AtSign className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4 relative">
              {" "}
              {/* Added relative for positioning */}
              <Input
                className="rounded-full pr-12" // Added padding for the icon
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className=" cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-7 w-7 text-customTeal dark:text-Yellow" />
                ) : (
                  <Eye className="h-7 w-7 text-customTeal dark:text-Yellow" />
                )}
              </div>
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4 relative">
              {" "}
              {/* Added relative for positioning */}
              <Input
                className="rounded-full pr-12" // Added padding for the icon
                type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                className="cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-7 w-7 text-customTeal dark:text-Yellow" />
                ) : (
                  <Eye className="h-7 w-7 text-customTeal dark:text-Yellow" />
                )}
              </div>
            </div>
            <Button
              className="rounded-full h-10 w-4/5 font-bold bg-customTeal dark:bg-Green"
              type="submit"
              // disabled
            >
              {loading ? <Spinner /> : "Sign Up"}
            </Button>
          </form>
          <div className="flex items-center dark:text-gray-500 justify-center gap-2">
            Already have an account?
            <div
              className="text-customTeal dark:text-Green cursor-pointer"
              onClick={() => setSwitchCss(!switchCss)}
            >
              Login
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPage;

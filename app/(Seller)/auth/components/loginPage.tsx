import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

interface LoginPageProps {
  switchCss: boolean;
  setSwitchCss: (value: boolean) => void;
  isResetOpen: boolean;
  setIsResetOpen: (value: boolean) => void;
  loading: boolean;
  setError: (value: string) => void;
  setloading: (value: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  switchCss,
  setSwitchCss,
  isResetOpen,
  setIsResetOpen,
  loading,
  setloading,
  setError,
}) => {
  const session = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setloading(true);
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(result);
    if (result?.error) setError("Invalid email or password");
    else {
      toast.success(`Welcome ${session.data?.user?.name}`);
      window.location.href = "/dashboard"; // Redirect on success
    }
    setloading(false);
  };

  return (
    <>
      {switchCss && !isResetOpen && (
        <div className="flex flex-col z-10 items-center justify-start pt-24  pr-14 gap-4 w-2/4">
          <div className="font-nunito text-4xl text-customTeal dark:text-Green font-extrabold">
            Login
          </div>
          <form
            // closed login button
            onSubmit={handleSubmit}
            className="w-full flex dark:text-gray-200 flex-col items-center gap-4"
          >
            <div className="flex items-center w-4/5 justify-center">
              <Input
                className="rounded-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <User className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center">
              <Input
                className="rounded-full"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
            <Button
              type="submit"
                // disabled
              disabled={loading}
              className="rounded-full bg-customTeal dark:bg-Green font-bold h-10 w-4/5 disabled"
            >
              {loading ? <Spinner /> : "Login"}
            </Button>
          </form>
          <div
            className="text-customTeal dark:text-Green cursor-pointer"
            onClick={() => setIsResetOpen(!isResetOpen)}
          >
            Forgot Password?
          </div>
          <div className="flex items-center dark:text-gray-500 justify-center gap-2">
            Don&apos;t have an account?
            <div
              className="text-customTeal dark:text-Green cursor-pointer"
              onClick={() => setSwitchCss(!switchCss)}
            >
              {" "}
              Sign Up
            </div>
          </div>
        </div>
      )}
      {switchCss && isResetOpen && (
        <div className="flex flex-col z-10 items-center justify-start pt-32  pr-14 gap-4 w-2/4">
          <div className="font-nunito text-4xl text-customTeal dark:text-Green font-extrabold">
            Forgot Password
          </div>
          <div className="flex items-center gap-2 w-4/5 justify-center">
            <Input className="rounded-full" type="text" placeholder="Email" />
            <Mail className="h-7 w-7 text-customTeal  dark:text-Yellow" />
          </div>
          <Button className="rounded-full font-bold h-10 w-4/5 bg-customTeal dark:bg-Green">
            Send reset link
          </Button>
          <div
            className="text-customTeal dark:text-Green cursor-pointer"
            onClick={() => setIsResetOpen(!isResetOpen)}
          >
            Back to Login
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;

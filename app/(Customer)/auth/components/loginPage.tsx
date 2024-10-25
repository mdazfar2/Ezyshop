"use client";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ChevronLeftCircleIcon, User } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";

interface LoginPageProps {
  switchCss: boolean;
  setSwitchCss: (value: boolean) => void;
  isResetOpen: boolean;
  setIsResetOpen: (value: boolean) => void;
  loading: boolean;
  setError: (value: string) => void;
  setloading: (value: boolean) => void;
}

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const LoginPage: React.FC<LoginPageProps> = ({
  switchCss,
  setSwitchCss,
  loading,
  setloading,
  setError,
}) => {
  const [otpOpen, setOtpOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Form definition for OTP
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onOTPSubmit(data: z.infer<typeof FormSchema>) {
    setloading(true);
    const result = await signIn("credentials", {
      email,
      otp: data.pin,
      role: "user",
      redirect: false,
    });
    if (!result?.ok) {
      setError("Invalid email or otp");
    } else {
      toast.success(`Welcome!`);
      setTimeout(() => {
        window.location.href = "/"; // Redirect on success
      }, 2000);
    }
    setloading(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    setloading(true);
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login/user", {
        email,
      });
      // console.log(result);
      if (res.status == 200) {
        toast.success("otp sent successfully!");
        setOtpOpen(true);
        setloading(false)
        return;
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError("user not found")
      } else {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          const statusCode = axiosError.response.status;

          if (statusCode === 400) {
            setError("user not found");
          }

          if (statusCode === 500) {
            setError("error in sending otp, please try after sometime.");
          }
        }
      }
      console.log(err);
    }

    setloading(false);
  };

  return (
    <>
      {switchCss && !otpOpen && (
        <div className="flex flex-col z-10 items-center justify-start py-10 sm:pt-24 gap-4 w-full lg:w-2/4 max-w-md px-4">
          <div className="font-nunito text-3xl sm:text-4xl text-customTeal dark:text-Green font-extrabold">
            Login
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex dark:text-gray-200 flex-col items-center gap-4"
          >
            <div className="flex items-center w-full justify-center">
              <Input
                className="rounded-full w-4/5"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <User className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-full bg-customTeal dark:bg-Green font-bold h-10 w-4/5 disabled"
            >
              {loading ? <Spinner /> : "Login"}
            </Button>
          </form>
          <div className="flex items-center dark:text-gray-500 justify-center gap-2">
            Don&apos;t have an account?
            <div
              className="text-customTeal dark:text-Green cursor-pointer"
              onClick={() => setSwitchCss(!switchCss)}
            >
              Sign Up
            </div>
          </div>
        </div>
      )}

      {switchCss && otpOpen && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onOTPSubmit)}
            className="flex flex-col dark:text-gray-200 z-10 items-start justify-center py-10 lg:py-0 pl-10 gap-4 w-full max-w-md mx-auto"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className="flex items-start justify-center flex-col">
                  <FormLabel className="text-2xl gap-2 flex items-center justify-center text-customTeal dark:text-Green font-bold">
                    <ChevronLeftCircleIcon onClick={()=>{setOtpOpen(false)}} className="h-5 w-5"/>
                    One-Time Password
                  </FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-customTeal dark:bg-Green" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default LoginPage;

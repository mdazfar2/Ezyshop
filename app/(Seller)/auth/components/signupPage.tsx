import { Input } from "@/components/ui/input";
import { AtSign, BookHeart, ChevronLeftCircleIcon, CreditCard, MapPin, Phone, Store, User} from "lucide-react"; // Import Eye and EyeOff
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
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
import { signIn } from "next-auth/react";

interface SignupPageProps {
  switchCss: boolean;
  setSwitchCss: (value: boolean) => void;
  setError: (value: string) => void;
  loading: boolean;
  setloading: (value: boolean) => void;
}

// form schema otp
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const SignupPage: React.FC<SignupPageProps> = ({
  switchCss,
  setSwitchCss,
  setError,
  loading,
  setloading,
}) => {
  const [otpOpen, setOtpOpen] = useState(false);
  // State for form fields
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [storeMobile, setStoreMobile] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeUPI, setStoreUPI] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  //  form definition otp
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onOTPSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data.pin+email);
    setloading(true);

    const result = await signIn("credentials", {
      email,
      otp: data.pin,
      role: "seller",
      redirect: false,
    });
    console.log(result);
    if (!result?.ok) {
      setError("Invalid email or otp");
    } else {
      toast.success(`Welcome!`);

      setTimeout(() => {
        window.location.href = "/dashboard"; // Redirect on success
      }, 2000);
    }
    setloading(false);
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    setloading(true);
    e.preventDefault();

    // Basic validation
    if (!name || !storeMobile || !email || !storeAddress || !storeUPI || !storeName ||!storeDescription) {
      setError("All fields are required.");
      setloading(false);
      return;
    }

    try {
      const res = await axios.post("/api/auth/signup/seller", {
        email,
        name,
        storeMobile,
        storeAddress,
        storeUPI,
        storeName,
        storeDescription,
        otp:""
      });
      if(res.status===200){
        toast.success("otp sent successfully!");
        setOtpOpen(true);
        setloading(false)
        return;
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError("Invalid email or number, axios error");
      } else {
        setError("Invalid email or number");
      }
      //
      console.log(err);
      setloading(false);
      return;
    }
    setOtpOpen(true);

    setname("");
    setStoreMobile("");
    setStoreAddress("");
    setStoreUPI("");
    setStoreName("");
    setStoreDescription("")

    setloading(false);
  };

  return (
    <>
      {!switchCss && !otpOpen && (
        <div className="flex flex-col dark:text-gray-200 z-10 gap-2 lg:gap-0 items-center justify-start pt-4 w-full md:w-2/4">
          <div className="font-nunito md:pl-10 text-center text-4xl text-customTeal dark:text-Green font-extrabold">
            Setup Your Store
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex md:pr-4 flex-col items-center md:items-end justify-center"
          >
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="Owner Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <User className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="Store Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
              <Store className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="store contact number"
                value={storeMobile}
                onChange={(e) => setStoreMobile(e.target.value)}
              />
              <Phone className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="store description"
                value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)}
              />
              <BookHeart className="h-7 w-7 text-customTeal dark:text-Yellow" />
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
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="UPI"
                placeholder="payment UPI"
                value={storeUPI}
                onChange={(e) => setStoreUPI(e.target.value)}
              />
              <CreditCard className="h-7 w-7 text-customTeal dark:text-Yellow" />
            </div>
            <div className="flex items-center w-4/5 justify-center mb-4">
              <Input
                className="rounded-full"
                type="text"
                placeholder="store Address"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
              />
              <MapPin className="h-7 w-7 text-customTeal dark:text-Yellow" />
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
      {!switchCss && otpOpen && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onOTPSubmit)}
            className="flex flex-col dark:text-gray-200 z-10 items-start justify-center py-10 md:py-0 pl-14 gap-4 w-2/4"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className="flex gap-2 items-start justify-center flex-col">
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

export default SignupPage;


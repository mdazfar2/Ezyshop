'use client';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { ChevronLeftCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation'; // use 'next/navigation' for Next.js 13 App Router

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  roleType: 'user' | 'seller' | 'admin';
  email: string;
  setOtpOpen: (otp: boolean) => void;
}

const FormSchema = z.object({
  pin: z
    .string()
    .length(6, { message: 'Your one-time password must be 6 characters.' }),
});

export function OtpForm({
  className,
  roleType,
  email,
  setOtpOpen,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [redirectUrl, setRedirectUrl] = React.useState<string | null>(null);
  const { data: session } = useSession(); // Access the session
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: '' },
  });

  async function onOTPSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    const result = await signIn('credentials', {
      email,
      otp: data.pin,
      role: roleType,
      redirect: false,
    });

    if (!result?.ok) {
      toast.error('Invalid email or OTP');
    } else {
      toast.success('Welcome!');

      // Set redirect URL based on user role
      if (roleType === 'user') {
        setRedirectUrl('/'); // Redirect to home for user
      } else if (roleType === 'seller') {
        setRedirectUrl(`/seller/${email}`); // Temporarily set to seller's page
      }
      else{
        setRedirectUrl(`/admin/${email}`);
      }
    }
    setIsLoading(false);
  }

  React.useEffect(() => {
    if (redirectUrl && session) {
      const userId = session.user?.id;
      const userRole = session.user?.role;
  
      if (userRole === "seller" && userId) {
        router.push(`/seller/${userId}`); // Redirect to seller's page
      } else if (userRole === "user") {
        router.push(redirectUrl); // Redirect to the specified URL or home for a user
      } else if (userRole === "admin") {
        router.push(`/admin/${userId}`); // Redirect to admin dashboard
      }
    }
  }, [redirectUrl, session, router]);
  

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Toaster />
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
                  <ChevronLeftCircleIcon
                    onClick={() => setOtpOpen(false)}
                    className="h-5 w-5"
                  />
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
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-black" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { OtpForm } from './otp-form';
import { AdminVerify } from '@/actions/Admin/admin-login';
import { cn } from '@/lib/utils';
import toast, { Toaster } from 'react-hot-toast';

interface AdminAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  authType: 'signup' | 'login';
}

export function AdminLoginForm({
  className,
  authType,
  ...props
}: AdminAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState('');
  const [otpOpen, setOtpOpen] = React.useState(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    if (!email) {
      toast.error('Please enter an email.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await AdminVerify({ email });

      if (!res.success) {
        toast.error(res.error || 'Error verifying admin.');
        setIsLoading(false);
        return;
      }

      toast.success('Admin verified! Please enter the OTP.');
      setOtpOpen(true);
    } catch (error) {
      toast.error('Verification failed, please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Toaster />
      {!otpOpen && (
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-black" disabled={isLoading}>
              {isLoading ? (
                <Spinner className="mr-2" />
              ) : authType === 'signup' ? (
                'Sign Up with Email'
              ) : (
                'Sign In with Email'
              )}
            </Button>
          </div>
        </form>
      )}
      {otpOpen && <OtpForm email={email} setOtpOpen={setOtpOpen} roleType="admin" />}
    </div>
  );
}

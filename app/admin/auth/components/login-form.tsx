'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  authType: 'signup' | 'login';
}

export function UserLoginForm({
  className,
  authType,
  ...props
}: UserAuthFormProps) {
  const [isLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState('');
  const [otpOpen] = React.useState(false);

  
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Toaster />
      {!otpOpen && (
        <form >
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
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <Button type="submit" className="bg-black" disabled={isLoading}>
              {isLoading && (
                <Spinner/>
              )}
              {authType === 'signup' ? (
                <p>Sign Up with Email</p>
              ) : (
                <p>Sign In with Email</p>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { UserLoginForm } from '@/app/admin/auth/components/login-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        {/* Background Image Section for larger screens */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/admin.svg"
            width={1280}
            height={843}
            alt="Authentication"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        {/* Main Content Section */}
        <div className="relative z-10 w-full max-w-lg px-6 py-8 mx-auto text-white bg-opacity-70 rounded-xl lg:bg-black lg:bg-opacity-90">
          <div className="space-y-6">
            {/* Title and Description */}
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Welcome Back, Admin!</h1>
              <p className="text-sm text-muted-foreground">Enter your credentials to access your admin panel.</p>
            </div>

            {/* User Login Form */}
            <UserLoginForm authType="login" />

            {/* Alternative Links */}
            <div className="flex justify-between text-sm text-center text-white">
              <Link href="/forgot-password" className="hover:text-gray-300">
                Forgot Password?
              </Link>
              <Link href="/register" className="hover:text-gray-300">
                Don&apos;t have an account? Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use server';
import { generateAndSendOTP } from '@/lib/auth';
import prismadb from '@/lib/prismadb';
import { Prisma, Admin } from '@prisma/client';

export async function AdminVerify({
  email,
}: {
  email: string;
}): Promise<{ success: boolean; error?: string; data?: Admin }> {
  const exitingAdmin = await prismadb.admin.findUnique({
    where: {
      email: email,
    },
  });

  if (!exitingAdmin) {
    return {
      success: false,
      error: 'Admin does not exists',
    };
  }
  const resp = await generateAndSendOTP(email, 'admin');

  if (!resp) {
    return { success: false, error: 'Error occured in sending otp' };
  }

  return { success: true };
}

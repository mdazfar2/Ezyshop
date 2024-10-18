import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import sendEmail from "@/lib/sendEmail"; // Ensure this points to your sendEmail function

const prisma = new PrismaClient();

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        otp: { label: "OTP", type: "text" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.otp || !credentials?.role) {
          throw new Error("Invalid credentials");
        }

        let account;
        if (credentials.role === "user") {
          account = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
        } else {
          account = await prisma.seller.findUnique({
            where: { email: credentials.email },
          });
        }

        if (!account) {
          return null;
        }

        // Verify OTP
        if (credentials.otp !== account.otp) {
          // Assuming 'otp' field exists in your User/Seller model
          return null;
        }

        // Clear OTP after successful login
        if (credentials.role === "user") {
          await prisma.user.update({
            where: { email: credentials.email },
            data: { otp: null }, // Reset OTP or delete it after use
          });
        } else {
          await prisma.seller.update({
            where: { email: credentials.email },
            data: { otp: null }, // Reset OTP or delete it after use
          });
        }

        return {
          id: account.id,
          name: account.name,
          email: account.email,
          role: account.role == "user" ? "user" : "seller",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.uid = user.id;
        token.role = user.role; // Store role in JWT token
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.role = token.role; // Pass role to session
      }
      return session;
    },
  },
};

// Function to generate and send OTP
export const generateAndSendOTP = async (email: string, role: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

  // Store OTP in the user or seller record
  if (role === "user") {
    await prisma.user.update({
      where: { email },
      data: { otp }, // Ensure 'otp' field exists in your User model
    });
  }
  if (role === "seller") {
    await prisma.user.update({
      where: { email },
      data: { otp }, // Ensure 'otp' field exists in your User model
    });
  }

  // Send OTP via email
  await sendEmail({
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
    html: `<strong>Your OTP code is ${otp}</strong>`,
  });

  return otp;
};

// Call generateAndSendOTP(email) before redirecting to the login page to send OTP to the user

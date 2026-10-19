
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import sendEmail from "@/lib/sendEmail"; // Ensure this points to your sendEmail function
import prismadb from "./prismadb";

// const prisma = new PrismaClient();

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
          account = await prismadb.user.findUnique({
            where: { email: credentials.email },
          });
        } else if (credentials.role === "seller"){
          account = await prismadb.seller.findUnique({
            where: { email: credentials.email },
          });
        }else if (credentials.role === "admin"){
          account = await prismadb.admin.findUnique({
            where: { email: credentials.email },
          });
        }
        else{
          return null
        }

        if (!account) {
          return null;
        }

        // Verify OTP
        if (credentials.otp !== account.otp) {
          // Assuming 'otp' field exists in your User/Seller model
          return null;
        }

        const updateData = { otp: null };
        // Clear OTP after successful login
        if (credentials.role === "user") {
          await prismadb.user.update({
            where: { email: credentials.email },
            data: updateData, // Reset OTP or delete it after use
          });
        } else if(credentials.role === "seller"){
          await prismadb.seller.update({
            where: { email: credentials.email },
            data: updateData, // Reset OTP or delete it after use
          });
        }else if (credentials.role === "admin"){
          await prismadb.admin.update({
            where: { email: credentials.email },
            data: updateData, // Reset OTP or delete it after use
          });
        }
        else{
          return null
        }

        const role =  account.role == "user" ? "user" : account.role == "seller"? "seller" : "admin"

        return {
          id: account.id,
          name: account.name,
          email: account.email,
          role: role
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
export const generateAndSendOTP = async (
  email: string,
  role: string
) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

  console.log(`[generateAndSendOTP] Generating OTP for ${role}: ${email}`);

  // Store OTP in the user or seller record
  if (role === "user") {
    try {
      await prismadb.user.update({
        where: { email },
        data: { otp }, // Ensure 'otp' field exists in your User model
      });
      console.log(`[generateAndSendOTP] OTP stored in DB for user: ${email}`);
    } catch (err) {
      console.error(
        "[generateAndSendOTP] DB Error storing OTP for user:",
        err instanceof Error ? err.message : err
      );
      return false;
    }
  } else if (role === "seller") {
    try {
      await prismadb.seller.update({
        where: { email },
        data: { otp }, // Ensure 'otp' field exists in your Seller model
      });
      console.log(`[generateAndSendOTP] OTP stored in DB for seller: ${email}`);
    } catch (err) {
      console.error(
        "[generateAndSendOTP] DB Error storing OTP for seller:",
        err instanceof Error ? err.message : err
      );
      return false;
    }
  } else if (role === "admin") {
    try {
      await prismadb.admin.update({
        where: { email },
        data: { otp }, // Ensure 'otp' field exists in your Admin model
      });
      console.log(`[generateAndSendOTP] OTP stored in DB for admin: ${email}`);
    } catch (err) {
      console.error(
        "[generateAndSendOTP] DB Error storing OTP for admin:",
        err instanceof Error ? err.message : err
      );
      return false;
    }
  }

  try {
    const response = await sendEmail({
      to: email,
      subject: "Your OTP Code - Ezyshop",
      text: `Your OTP code is ${otp}. It will expire shortly.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0d9488; text-align: center;">Ezyshop Verification</h2>
          <p>Your one-time password (OTP) is:</p>
          <div style="background: #f0fdfa; border: 2px solid #0d9488; border-radius: 8px; padding: 16px; text-align: center; font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #0d9488;">
            ${otp}
          </div>
          <p style="color: #666; font-size: 13px; margin-top: 16px;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });

    console.log("[generateAndSendOTP] OTP email sent successfully:", response?.messageId);
    return true;
  } catch (err) {
    console.error(
      "[generateAndSendOTP] Error sending OTP email:",
      err instanceof Error ? err.message : err
    );
    return false;
  }
};

// Call generateAndSendOTP(email) before redirecting to the login page to send OTP to the user


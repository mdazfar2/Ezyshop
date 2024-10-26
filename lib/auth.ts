
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
        } else {
          account = await prismadb.seller.findUnique({
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

        const updateData = { otp: null };
        // Clear OTP after successful login
        if (credentials.role === "user") {
          await prismadb.user.update({
            where: { email: credentials.email },
            data: updateData, // Reset OTP or delete it after use
          });
        } else {
          await prismadb.seller.update({
            where: { email: credentials.email },
            data: updateData, // Reset OTP or delete it after use
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
export const generateAndSendOTP = async (
  email: string,
  role: string
) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

  // Store OTP in the user or seller record

  if (role === "user") {
    try {
      await prismadb.user.update({
        where: { email },
        data: { otp }, // Ensure 'otp' field exists in your User model
      });
    } catch (err) {
      console.error(
        "DB Error sending OTP for user:",
        err instanceof Error ? err.message : err
      );
      return false;
    }
  } else if (role === "seller") {
    try {
      await prismadb.seller.update({
        where: { email },
        data: { otp }, // Ensure 'otp' field exists in your User model
      });
    } catch (err) {
      console.error(
        "DB Error sending OTP for seller:",
        err instanceof Error ? err.message : err
      );
      return false;
    }
  }

  try {
    const response = await sendEmail({
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}`,
      html: `<strong>Your OTP code is ${otp}</strong>`,
    });

    console.log("OTP email sent successfully:", response);
    return true;
    // Handle success response if needed (e.g., logging messageId)
  } catch (err) {
    console.error(
      "Error sending OTP:",
      err instanceof Error ? err.message : err
    );
    return false;
  }
};

// Call generateAndSendOTP(email) before redirecting to the login page to send OTP to the user

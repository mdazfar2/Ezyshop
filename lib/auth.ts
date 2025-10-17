import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import sendEmail from "@/lib/sendEmail";
import prismadb from "./prismadb";

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
        if (!credentials?.email || !credentials?.otp || !credentials?.role) throw new Error("Invalid credentials");

        let account;
        if (credentials.role === "user") account = await prismadb.user.findUnique({ where: { email: credentials.email } });
        else if (credentials.role === "seller") account = await prismadb.seller.findUnique({ where: { email: credentials.email } });
        else if (credentials.role === "admin") account = await prismadb.admin.findUnique({ where: { email: credentials.email } });
        else return null;

        if (!account || credentials.otp !== account.otp) return null;

        const updateData = { otp: null };
        if (credentials.role === "user") await prismadb.user.update({ where: { email: credentials.email }, data: updateData });
        else if (credentials.role === "seller") await prismadb.seller.update({ where: { email: credentials.email }, data: updateData });
        else if (credentials.role === "admin") await prismadb.admin.update({ where: { email: credentials.email }, data: updateData });
        else return null;

        const role = account.role === "user" ? "user" : account.role === "seller" ? "seller" : "admin";

        return {
          id: account.id,
          name: account.name,
          email: account.email,
          role: role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.uid = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.uid;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

export const generateAndSendOTP = async (email: string, role: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  if (role === "user") {
    try {
      await prismadb.user.update({ where: { email }, data: { otp } });
    } catch (err) {
      console.error("DB Error sending OTP for user:", err instanceof Error ? err.message : err);
      return false;
    }
  } else if (role === "seller") {
    try {
      await prismadb.seller.update({ where: { email }, data: { otp } });
    } catch (err) {
      console.error("DB Error sending OTP for seller:", err instanceof Error ? err.message : err);
      return false;
    }
  } else if (role === "admin") {
    try {
      await prismadb.admin.update({ where: { email }, data: { otp } });
    } catch (err) {
      console.error("DB Error sending OTP for admin:", err instanceof Error ? err.message : err);
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
  } catch (err) {
    console.error("Error sending OTP:", err instanceof Error ? err.message : err);
    return false;
  }
};

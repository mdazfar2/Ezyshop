import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient();

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        const seller = await prisma.seller.findUnique({ where: { email: credentials.email } });

        const account = user || seller;
        if (!account || !account.passwordHash) {
          return null;
        }

        const isVerified = await bcrypt.compare(credentials.password, account.passwordHash);
        if (!isVerified) {
          return null;
        }

        return {
          id: account.id,
          name: account.name,
          email: account.email,
          role: user ? "user" : "seller",
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

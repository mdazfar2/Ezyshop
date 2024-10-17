import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import {  DefaultUser, Session } from "next-auth";
import { JWT } from "next-auth/jwt";


export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials:Record<"email" | "password", string> | undefined) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const prisma = new PrismaClient();
        // console.log(credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.passwordHash) {
          // return NextResponse.json({msg:"invalid email, not found in DB"},{status:403})
          console.log("invalid email, not found in DB");
          return null; // Return null for invalid login
        }
        const isVerified = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isVerified) {
          console.log("Invalid password");
          return null; // Return null if password doesn't match
        }
        return { 
          id: user.id,   // Ensure id is included
        name: user.name,
        email: user.email,
        };
      },
    }),
  ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
          jwt: async ({ user, token }:{user:DefaultUser,token:JWT}) => {
          if (user) {
              token.uid = user.id;
          }
          return token;
          },
        session: ({ session, token }:{session:Session,token:JWT}) => {
            // if (session.user) {
             
            //     session.user.id = token.uid
            // }
            if (session.user) {
             
              return { ...session,
                user: { ...session.user,
                  id: token.uid,
                }
            }
          }
            return session
        }
      },
};

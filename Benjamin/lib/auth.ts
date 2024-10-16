import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const NEXT_AUTH_CONFIG = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {

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
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.mobileNumber,
        };
      },
    }),
  ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
          jwt: async ({ user, token }: any) => {
          if (user) {
              token.uid = user.id;
          }
          return token;
          },
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.uid
            }
            return session
        }
      },
};

// next-auth.d.ts
import NextAuth, { DefaultUser, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      role: "user" | "seller"; // Extend with the role property
    };
  }

  interface User extends DefaultUser {
    role: "user" | "seller"; // Add role to User object
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
    role: "user" | "seller"; // Add role to JWT token
  }
}

declare module "leaflet" {
  interface IconDefault {
    _getIconUrl?: () => string;
  }
}

import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import pool from "@/app/utils/db";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google") return true;

      try {
        const [rows] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [user.email]
        );

        if ((rows as any).length === 0) {
          await pool.query(
              "INSERT INTO users (email, name, provider, avatar) VALUES (?, ?, ?, ?)",
              [user.email, user.name, account.provider, user.image]
          );
        }

        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user!.email = token.email as string;
        session.user!.name = token.name as string;
        session.user!.image = token.picture as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

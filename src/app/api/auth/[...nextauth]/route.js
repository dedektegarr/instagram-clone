import { db } from "@/utils/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handlers = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const q = query(collection(db, "users"), where("email", "==", email));
        const snapshot = await getDocs(q);

        const user = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))[0];

        if (user) {
          const checkPassword = await bcrypt.compare(password, user.password);
          if (checkPassword) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
});

export { handlers as GET, handlers as POST };

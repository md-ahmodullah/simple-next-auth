import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (email === "admin@example.com" && password === "admin123") {
          return { id: 1, name: "Admin User", email };
        }

        return null;
      },
    }),
  ],
  // session: {
  //   strategy: "jwt",
  // },
  // secret: process.env.NEXTAUTH_SECRET,
};

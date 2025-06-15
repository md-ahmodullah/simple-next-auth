import { authOptionsUpdated } from "@/lib/authOptionsUpdated";
import NextAuth from "next-auth";

const handler = NextAuth(authOptionsUpdated);

export { handler as GET, handler as POST };

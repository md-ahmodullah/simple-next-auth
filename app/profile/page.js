import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Logout from "../components/Logout";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <br />
      <br />
      <Logout />
    </div>
  );
}

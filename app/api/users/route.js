import { connectDB } from "@/lib/mongoDB";
import { User } from "@/models/User";

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}, "name email"); // get name & email only
    return Response.json(users);
  } catch (error) {
    return Response.json({ message: "Failed to fetch users" }, { status: 500 });
  }
}

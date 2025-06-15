import { connectDB } from "@/lib/mongoDB";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();
  await connectDB();

  const userExists = await User.findOne({ email });
  if (userExists) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword });

  return new Response(JSON.stringify({ message: "User created" }), {
    status: 201,
  });
}

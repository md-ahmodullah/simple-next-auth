"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="form">
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="btn">
          Log In
        </button>

        <div className="divider"></div>

        <button
          className="btn"
          id="google"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
        >
          Sign In with Google
        </button>
        <p
          style={{
            margin: "10px",
            textAlign: "center",
            color: "gray",
            fontSize: "14px",
          }}
        >
          Create an account -{" "}
          <Link style={{ color: "#609ae6" }} href="/signUp">
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
}

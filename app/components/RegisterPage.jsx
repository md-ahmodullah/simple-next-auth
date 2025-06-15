"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("User registered!");
      setForm({});
      router.push("/profile");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Register</h2>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <br />
        <button type="submit" className="btn">
          Register
        </button>

        <div className="divider"></div>

        <button className="btn" id="google">
          Sign In with Google
        </button>
      </form>
    </>
  );
}

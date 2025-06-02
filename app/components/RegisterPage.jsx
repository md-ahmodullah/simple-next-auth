"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setName("");
    // setEmail("");
    // setPassword("");
    const user = { name, email, password };
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Register</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
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

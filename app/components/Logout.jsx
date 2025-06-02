"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  const btnStyle = {
    backgroundColor: "red",
    border: "none",
    borderRadius: "10px",
    padding: "5px 15px",
    fontWeight: "700",
    width: "90px",
  };
  return (
    <div style={btnStyle} onClick={() => signOut({ callbackUrl: "/" })}>
      Logout
    </div>
  );
}

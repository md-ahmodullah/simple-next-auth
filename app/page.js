"use client";
import LoginPage from "./components/LoginPage";

export default function AuthButtons() {
  const btnStyle = {
    backgroundColor: "green",
    border: "none",
    borderRadius: "5px",
    padding: "8px 15px",
    fontWeight: "700",
  };
  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       signIn(undefined, { callbackUrl: "/profile" });
    //     }}
    //     style={btnStyle}
    //   >
    //     Log In
    //   </button>
    // </div>
    <LoginPage />
  );
}

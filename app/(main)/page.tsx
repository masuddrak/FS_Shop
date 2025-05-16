"use client";

import { AuthState } from "@/types/auth";
import { useSelector } from "react-redux";

export default function Home() {
  const authinfo = useSelector((state: { atuh: AuthState }) => state.atuh);
  console.log("authinfo", authinfo);
  return (
    <div className="container mx-auto">
      <h1>Langing page</h1>
    </div>
  );
}

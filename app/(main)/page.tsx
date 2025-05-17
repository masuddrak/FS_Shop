"use client";

import Banner from "@/components/home/banner/Banner";
import { AuthState } from "@/types/auth";
import { useSelector } from "react-redux";

export default function Home() {
  const authinfo = useSelector((state: { atuh: AuthState }) => state.atuh);
  console.log("authinfo", authinfo);
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto my-80">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, earum provident, deleniti reiciendis quam architecto fugiat aperiam iusto quis pariatur alias tempora vitae accusantium dignissimos sed dolore, natus amet similique.
      </div>
    </div>
  );
}

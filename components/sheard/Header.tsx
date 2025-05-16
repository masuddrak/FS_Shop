import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="primary_bg sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="">FS</h2>
        </div>
        <div className="flex items-center gap-4 py-4">
          <Link href="/">Home</Link>
          <a href="">Shop</a>
          <a href="">Contact</a>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

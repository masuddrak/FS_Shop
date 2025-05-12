import React from "react";

export const Header = () => {
  return (
    <div className="primary_bg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="">FS</h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Contact</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};

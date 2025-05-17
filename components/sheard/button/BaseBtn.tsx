import React from "react";

import { ReactNode } from "react";

interface BaseBtnProps {
  children: ReactNode;
}

const BaseBtn = ({children}: BaseBtnProps) => {
  return (
    <button className="primary_bg text-white px-4 py-3 flex items-center gap-2 rounded-sm cursor-pointer">
      {children}
    </button>
  );
};

export default BaseBtn;

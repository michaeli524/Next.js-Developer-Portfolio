import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="h-auto flex items-center justify-center overflow-hidden relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:michael.work.li@outlook.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 shadow-md bg-dark text-light 
          border border-solid border-dark w-20 h-20 rounded-full font-semibold
          hover:bg-light hover:text-dark hover:border-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
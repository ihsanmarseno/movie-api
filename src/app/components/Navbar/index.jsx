import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
      <div className="bg-[#4F6F52]">
        <div className="flex flex-col items-center justify-between p-8 sm:flex-row">
          <Link href="/" className="pb-2 text-2xl font-bold tracking-widest text-white sm:pb-0">
            MOVLIE
          </Link>
          <input type="text" placeholder="Search Movie" className="p-2 rounded-md" />
        </div>
      </div>
  );
}

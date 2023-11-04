import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
      <div className="bg-[#363062]">
        <div className="flex flex-col items-center justify-between p-8 sm:flex-row">
          <Link href="/" className="pb-2 text-2xl font-bold tracking-widest text-white sm:pb-0">
            MOVLIE
          </Link>
          <InputSearch />
        </div>
      </div>
  );
}

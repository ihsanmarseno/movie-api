"use client"

import React from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import ButtonSearch from "../Button/ButtonSearch";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (keyword) => {
    router.push(`/search/${keyword}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    handleSearch(keyword);
  };


  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            placeholder="Search Movie"
            className="p-2 pl-10 rounded-md"
            ref={searchRef}
          />
          <ButtonSearch type="submit" handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

"use client"

import React from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            placeholder="Search Movie"
            className="p-2 pl-10 rounded-md"
            ref={searchRef}
          />
          <button type="submit" onClick={handleSubmit} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 20.9l-5.3-5.3c1.2-1.6 1.9-3.6 1.9-5.6 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2 0 3.9-0.7 5.5-1.9l5.3 5.3 1.4-1.4zM2 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function MovieList({ title, poster_path }) {
  
  return (
    <div>
      <div className="p-6" >
        <Image
          src={`${process.env.NEXT_BASE_IMGURL}/${poster_path}`}
          alt={poster_path}
          width={600}
          height={600}
          priority={true}
          className="rounded-md"
        />
        <p className="py-2 font-semibold text-white">{title}</p>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function MovieList({ title, poster_path, release_date }) {
  
  return (
    <div>
      <div className="p-6" >
        <Image
          src={`${process.env.NEXT_BASE_IMGURL}/${poster_path}`}
          alt={title}
          width={600}
          height={600}
          priority={true}
          className="rounded-md aspect-auto"
        />
        <p className="py-2 font-semibold text-white">{title}</p>
        <p className="py-1 font-normal text-[#ECE3CE]">{`Release : ${release_date}`}</p>
      </div>
    </div>
  );
}

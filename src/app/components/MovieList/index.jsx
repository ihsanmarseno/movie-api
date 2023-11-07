import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MovieList({ api }) {
  return (
    <div className="grid grid-cols-1 lg:gap-10 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
      {api?.map((movie) => {
        const { id, title, poster_path, release_date } = movie;
        return (
          <div
            key={id}
            className="transition m-8 rounded-lg bg-[#435585] shadow-lg hover:scale-110 hover:duration-500"
          >
            <Link href={`detail/${id}`} className="cursor-pointer">
                <div className="p-6">
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}

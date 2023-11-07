import { getDetailMoviesResponse } from "@/app/libs/api-libs";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function DetailPage({ params }) {
  const detailMovies = await getDetailMoviesResponse(
    `movie/${params.id}`,
    "credits"
  );

  return (
    <>
    <div className="pt-4 mx-8">
      <div>
        <p className="text-2xl font-semibold">{detailMovies.title}</p>
        <p className="text-lg">{detailMovies.tagline}</p>
      </div>

      <div className="grid grid-cols-1 mt-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="h-full">
          <Image
            src={`${process.env.NEXT_BASE_IMGURL}/${detailMovies.poster_path}`}
            alt={detailMovies.title}
            width={400}
            height={400}
            priority={true}
            className="rounded-md shadow-xl w-400 aspect-auto"
          />
        </div>
        <div className="col-span-2 gap-2 pt-4 md:ml-4 lg:ml-2 sm:pt-0">
          <div>
            <p className="text-lg font-semibold lg:text-xl">Status : </p>
            <p className="text-base lg:text-lg">{detailMovies.status}</p>
          </div>

          <div>
            <p className="pt-4 text-lg font-semibold lg:text-xl">Genres : </p>
            <p className="text-base lg:text-lg">
              {detailMovies.genres.map((genre) => (
                <span key={genre.id}>
                  {genre.name}
                  {genre !== detailMovies.genres[detailMovies.genres.length - 1]
                    ? ", "
                    : ""}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="pt-4 text-lg font-semibold lg:text-xl">Overview : </p>
            <p className="text-base lg:text-lg">{detailMovies.overview}</p>
          </div>
          <div>
            <p className="pt-4 text-lg font-semibold lg:text-xl">
              Production :{" "}
            </p>
            <p className="text-base lg:text-lg">
              {detailMovies.production_companies.map((production, index) => (
                <span key={production.id}>
                  {production.name}
                  {index !== detailMovies.production_companies.length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="pt-4 text-lg font-semibold lg:text-xl">
              Release Date :{" "}
            </p>
            <p className="text-base lg:text-lg">{detailMovies.release_date}</p>
          </div>

          <div>
            <p className="pt-4 text-lg font-semibold lg:text-xl">Cast:</p>
            <p className="pb-4 text-base lg:text-lg">
              {detailMovies.credits.cast.slice(0, 5).map((castMember) => (
                <span key={castMember.id}>
                  {castMember.name}
                  {detailMovies.credits.cast.indexOf(castMember) !== 4
                    ? ", "
                    : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold ">Additional Information : </p>
          <Link href={`https://www.imdb.com/title/${detailMovies.imdb_id}`}>
            <button className=" mt-2 btn btn-wide bg-[#363062] border border-[#363062] text-white hover:text-black mb-4 lg:mb-0">
              IMDb
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

import Image from "next/image";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const data = await response.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {data.results.map((movie) => {
          return (
            <div key={movie.id}>
              <Image
                src={`${process.env.NEXT_BASE_IMGURL}/${movie.poster_path}`}
                width={300}
                height={300}
              />
              <p>{movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

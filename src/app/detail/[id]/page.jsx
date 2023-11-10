import { getMoviesResponse } from "@/app/libs/api-libs";
import DetailMovies from "@/app/components/DetailMovies";

export default async function DetailPage({ params }) {
  const detailMovies = await getMoviesResponse(
    `movie/${params.id}`,
    "append_to_response=credits"
  );

  return (
    <>
      <DetailMovies api={detailMovies} />
    </>
  );
}

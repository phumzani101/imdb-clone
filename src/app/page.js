import MovieContainer from "@/components/movies/MovieContainer";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_URL;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `${BASE_URL}/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${TMDB_API_KEY}&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <main>
      <MovieContainer movies={movies} />
    </main>
  );
}

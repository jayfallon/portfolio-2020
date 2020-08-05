import { useRouter } from "next/router";

export default function MoviesPage({ movies, page, numberOfMovies }) {
  const router = useRouter();
  const lastPage = Math.ceil(numberOfMovies / 3);
  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
      <button
        onClick={() => router.push(`/movies?page=${page - 1}`)}
        disabled={page <= 1}>
        Previous
      </button>
      <button
        onClick={() => router.push(`/movies?page=${page + 1}`)}
        disabled={page >= lastPage}>
        Next
      </button>
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`);
  const numberOfMovies = await numberOfMoviesResponse.json();

  const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start}`);
  const data = await res.json();

  return {
    props: {
      movies: data,
      page: +page,
      numberOfMovies,
    },
  };
}

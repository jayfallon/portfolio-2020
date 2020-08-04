import Head from "next/head";

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { movies: data } };
}

export default function Home({ movies }) {
  return (
    <div>
      <h2>Movies</h2>
      <h3>
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </h3>
    </div>
  );
}

function Card({ movie }) {
  const { NEXT_PUBLIC_API_URL } = process.env;
  return (
    <div>
      <img src={NEXT_PUBLIC_API_URL + movie.poster.url} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

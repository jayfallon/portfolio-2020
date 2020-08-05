import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

const MovieStyles = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { items: data } };
}

export default function Home({ items }) {
  const movies = items.sort((a, b) => (a.title > b.title ? 1 : -1));
  return (
    <>
      <h2>Movies</h2>
      <MovieStyles>
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </MovieStyles>
    </>
  );
}

function Card({ movie }) {
  const { NEXT_PUBLIC_API_URL } = process.env;
  if (!movie.genre) {
    movie.genre = {};
    movie.genre.slug = "uncategorized";
  }
  return (
    <div>
      <h3>{movie.title}</h3>
      {movie.poster.url ? (
        <img src={NEXT_PUBLIC_API_URL + movie.poster.url} alt={movie.title} />
      ) : null}
      <p dangerouslySetInnerHTML={{ __html: movie.description }}></p>
      <p>
        <Link
          href="/movies/[genre]/[slug]"
          as={`/movies/${movie.genre.slug}/${movie.slug}`}>
          <a>More about this movie</a>
        </Link>
      </p>
    </div>
  );
}

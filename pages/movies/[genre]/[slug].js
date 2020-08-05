import getConfig from "next/config";

export default function Movie({ movie }) {
  return (
    <>
      <h2>{movie.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: movie.description }} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`);
  const data = await res.json();
  return {
    props: {
      movie: data[0],
    },
  };
}

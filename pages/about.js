import { NextSeo } from "next-seo";

export default function About({ page }) {
  const SEO = {
    title: "Jay Fallon - About",
    description: "Jay Fallon's about page",
    openGraph: {
      title: "Jay Fallon - About",
      description: "Jay Fallon's about page",
    },
  };
  return (
    <React.Fragment>
      <NextSeo {...SEO} />
      <h2>{page.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/pages/1`);
  const data = await res.json();

  return {
    props: {
      page: data,
    },
    revalidate: 1,
  };
}

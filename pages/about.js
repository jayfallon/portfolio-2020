import { NextSeo } from "next-seo";

export default function About() {
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
      <div>about page</div>
    </React.Fragment>
  );
}

import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Meta from "../components/Meta";

export const title = "Jay Fallon - Strategy, Design & Development - v2020";
const description =
  "The 2020 version of my portfolio as a progressive web application.";
const url = `https://jayfallon.net`;
const thumbnail = `${url}/static/graphics/thumbnail.png`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,

        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Performance: Inject the page’s critical CSS in the <head> tag */}
          {this.props.styleTags}

          <Meta
            url={url}
            description={description}
            title={title}
            thumbnail={thumbnail}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

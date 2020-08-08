import App, { Container } from "next/app";
import Page from "components/Page";
import getConfig from "next/config";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // const { publicRuntimeConfig } = getConfig();

    // const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
    // const navigation = await res.json();

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <React.Fragment>
        <Page>
          <Component {...pageProps} router={router} />
        </Page>
      </React.Fragment>
    );
  }
}

import styled from "styled-components";
import NProgress from "nprogress";

import Link from "next/link";
import Router from "next/router";

import MainNav from "./MainNav";
import media from "./MediaQueries";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function Header() {
  return (
    <header>
      <MainNav />
    </header>
  );
}

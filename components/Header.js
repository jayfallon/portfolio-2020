import styled from "styled-components";
import NProgress from "nprogress";

import ToggleNavigationColorButton from "./ToggleNavigationColorButton";

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
      <ToggleNavigationColorButton />
      <MainNav />
    </header>
  );
}

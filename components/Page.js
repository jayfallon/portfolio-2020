import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import storage from "local-storage-fallback";
import GlobalStyle from "./Global";
import Header from "./Header";
import Footer from "./Footer";
import UseTheme from "./UseTheme";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Page = (props) => {
  const theme = UseTheme();

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <a name="pageTop" id="pageTop" />
          <a href="#mainContent" className="content--skip">
            Skip to Content
          </a>
          <Header navigation={props.navigation} />
          {props.children}
          <Footer />
        </StyledPage>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Page;

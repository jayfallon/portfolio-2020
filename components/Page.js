import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import storage from "local-storage-fallback";
import Meta from "./Meta";
import GlobalStyle from "./Global";
import Header from "./Header";
import Footer from "./Footer";
import UseTheme from "./UseTheme";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Page = (props) => {
  const theme = UseTheme();

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyle />
        <Meta />
        <a name="pageTop" id="pageTop" />
        <a href="#mainContent" className="content--skip">
          Skip to Content
        </a>
        <Header />
        {props.children}
        <Footer />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;

import { createGlobalStyle } from "styled-components";
import style from "styled-theming";
import media from "components/MediaQueries";
import { Colors } from "./Theme";

const getBackground = style("mode", {
  light: "#FAFAFA",
  dark: "#FAFAFA",
});

const getColor = style("mode", {
  light: "#090909",
  dark: "#090909",
});

const getFontSize = style("textZoom", {
  normal: "1.8rem",
  magnify: "1.8rem",
});

const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html, body {
  height: 100%;
  font-size: 10px;
}

body {
  background-color: ${getBackground};
  color: ${getColor};
  font-size: 18.285714285714285px;
  line-height: 27px;
  font-family: Lato, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all .3s ease-in-out;
}
main {
  background: #fafafa;
}

div.page--heading {
  
}

div.page--heading h2 {
  
}

#__next {
  height: 100%;
}

strong {
  font-weight: bold;
}

* {
  box-sizing: border-box;
  }

a.content--skip {
  background: #111111;
  padding: 8px;
  height: 30px;
  color: #fafafa;
  position: absolute;
  left: 50%;
  transform: translateY(-100%);
  transition: transform 0.3s;
}
a.content--skip:focus {
  transform: translateY(0%);
}

`;
export default GlobalStyle;

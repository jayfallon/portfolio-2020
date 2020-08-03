import { css } from "styled-components";

const sizes = {
  desktopXl: 1690,
  desktopLg: 1280,
  desktop: 1024,
  table: 768,
  phone: 320,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

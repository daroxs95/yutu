import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.lighter.base};
    color: ${(props) => props.theme.colors.lighter.contrast};
  }
  html {
    /* overflow-y: auto; */
    scrollbar-gutter: stable;
  }
`;

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* border: 1px solid limegreen; */
  }
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    color-scheme: light dark;
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.dark};
    width: 100%;
    height: 100%;
  }

  body,
  html,
  #root,
  :root {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  button {
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;

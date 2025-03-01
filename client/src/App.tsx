import { ThemeProvider } from "styled-components";
import { useDocumentTitle } from "./hooks";
import Routes from "./Router/router";
import { theme } from "./theme";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  useDocumentTitle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

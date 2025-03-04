import { ThemeProvider } from "styled-components";
import { useDocumentTitle } from "./hooks";
import Routes from "./Router/Router";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

const App = () => {
  useDocumentTitle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { useDocumentTitle } from "./hooks";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { AppRoutes } from "./Router/router";

const App = () => {
  useDocumentTitle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

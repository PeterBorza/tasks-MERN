import { useDocumentTitle } from "./hooks";
import { AppRoutes } from "./Router/router";
import ThemeProvider from "./providers/ThemeProvider";
import QueryProvider from "./providers/QueryProvider";
import ErrorBoundary from "./providers/ErrorBoundary";

const App = () => {
  useDocumentTitle();

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <QueryProvider>
          <AppRoutes />
        </QueryProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;

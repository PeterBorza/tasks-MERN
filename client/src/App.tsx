import { useDocumentTitle } from "./hooks";
import Routes from "./Router/router";

const App = () => {
  useDocumentTitle();

  return <Routes />;
};

export default App;

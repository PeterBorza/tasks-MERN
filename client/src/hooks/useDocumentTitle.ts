import { useEffect } from "react";

export const useDocumentTitle = () => {
  useEffect(() => {
    document.title = import.meta.env.DEV ? "Development" : "Website";
  }, []);
};

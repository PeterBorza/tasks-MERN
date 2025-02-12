import { useEffect } from "react";

export const useDocumentTitle = () => {
  useEffect(() => {
    import.meta.env.DEV ? (document.title = "Development") : "Website";
  }, []);
};

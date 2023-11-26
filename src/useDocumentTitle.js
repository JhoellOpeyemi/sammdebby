import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Sammdebby | ${title}`;
  }, [title]);
};

export default useDocumentTitle;

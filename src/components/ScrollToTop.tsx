import { useEffect } from "react";
import useQuery from "../hooks/useQuery";

export default function ScrollToTop() {
  const { queryString } = useQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [queryString]);

  return null;
}

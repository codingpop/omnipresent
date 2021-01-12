import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import { IQuery } from "../types";

const useQuery = () => {
  const location = useLocation();
  const history = useHistory();
  const query: IQuery = qs.parse(location.search, { parseNumbers: true });
  const pushQuery = (q: { [key: string]: string | number }) => {
    const newQuery = {
      ...query,
      ...q,
    };

    const queryString = qs.stringify(newQuery, { skipNull: true });
    history.push(`${location.pathname}?${queryString}`);
  };

  return {
    queryString: location.search,
    query,
    pushQuery,
  };
};

export default useQuery;

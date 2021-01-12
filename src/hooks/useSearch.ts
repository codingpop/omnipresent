import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { IResult, IQuery } from "../types";
import request from "../lib/request";
import useQuery from "./useQuery";

const useSearch = () => {
  const [result, setResult] = useState<IResult>({
    total_count: 0,
    incomplete_result: false,
    items: [],
  });
  const [loading, setLoading] = useState(false);
  const { query, queryString } = useQuery();
  const toast = useToast();

  const search = async ({ q = "", page = 1 }: IQuery) => {
    setLoading(true);

    try {
      const data = await request<IResult>(
        `https://api.github.com/search/issues?page=${page}&per_page=25&q=${encodeURIComponent(
          `${q} repo:facebook/react`
        )}`,
        {
          headers: new Headers({
            "content-type": "application/vnd.github.v3+json",
          }),
        }
      );

      setResult(data);
    } catch (err) {
      toast({
        title: "An error occurred.",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search(query);
  }, [queryString]);

  return {
    result,
    loading,
  };
};

export default useSearch;

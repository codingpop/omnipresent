import * as React from "react";
import { Container, Center } from "@chakra-ui/react";
import Paginate from "react-paginate";
import Search from "./Search";
import Issues from "./Issues";
import useSearch from "../hooks/useSearch";
import useQuery from "../hooks/useQuery";

const Home = () => {
  const { result, loading } = useSearch();
  const { pushQuery, query } = useQuery();

  return (
    <Container maxW="1182px">
      <Search />
      <Issues data={result.items} loading={loading} />

      <Center
        mb="50px"
        __css={{
          ".pagination li": {
            display: "inline-block",
            borderWidth: "1px",
            borderRadius: "6px",
          },
          ".pagination li:not(:last-child)": {
            marginRight: "10px",
          },
          ".pagination a": {
            display: "inline-block",
            px: "20px",
            py: "8px",
          },
          ".active": {
            bgColor: "#0366d6",
            color: "#fff",
          },
        }}
      >
        {!loading && (
          <Paginate
            forcePage={query.page! - 1 || 0}
            pageCount={result.total_count}
            onPageChange={({ selected }) => {
              pushQuery({ page: selected + 1 });
            }}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            containerClassName={"pagination"}
            activeClassName="active"
            disableInitialCallback
          />
        )}
      </Center>
    </Container>
  );
};

export default Home;

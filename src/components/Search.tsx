import * as React from "react";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Box,
  Link,
  Text,
  Badge,
} from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import useQuery from "../hooks/useQuery";

const Search: React.FC = () => {
  const {
    pushQuery,
    query: { q = "" },
  } = useQuery();
  const [state, setState] = React.useState(q);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    pushQuery({
      q: state.trim(),
      page: 1,
    });
  };

  return (
    <Flex fontSize="14px" mb="16px" mt="100px">
      <Box as="form" width="100%" onSubmit={handleSubmit} data-testid="form">
        <FormControl id="search">
          <InputGroup
            borderColor="#e1e4e8"
            bgColor="#fafbfc"
            borderRadius="6px"
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="#767676" />}
            />
            <Input
              type="search"
              placeholder="is:open"
              fontSize="14px"
              name="search"
              py="5px"
              lineHeight="20px"
              onChange={handleChange}
              value={state}
            />
          </InputGroup>
        </FormControl>
      </Box>

      <Flex
        ml="16px"
        borderRadius="6px"
        borderColor="#e1e4e8"
        borderWidth="1px"
      >
        <Link
          href="#"
          display="flex"
          alignItems="center"
          h="100%"
          px="16px"
          textDecor="none"
          _hover={{
            bgColor: "#fafbfc",
            textDecor: "none",
          }}
        >
          <BellIcon h="16px" />
          <Text fontWeight="500">Labels</Text>
          <Badge>60</Badge>
        </Link>

        <Link
          href="#"
          display="flex"
          alignItems="center"
          h="100%"
          borderLeftWidth="1px"
          px="16px"
          textDecor="none"
          _hover={{
            bgColor: "#fafbfc",
            textDecor: "none",
          }}
        >
          <BellIcon h="16px" />
          <Text fontWeight="500">Milestones</Text>
          <Badge>1</Badge>
        </Link>
      </Flex>

      <Box
        as="button"
        ml="16px"
        minW="103px"
        px="16px"
        bgColor="#2ea44f"
        color="#fff"
        borderRadius="6px"
        fontWeight="bold"
        lineHeight="20px"
      >
        New issue
      </Box>
    </Flex>
  );
};

export default Search;

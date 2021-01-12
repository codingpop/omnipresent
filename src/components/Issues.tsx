import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import Issue from "./Issue";
import { IIssue } from "../types";

const Issues: React.FC<{ data: IIssue[]; loading: boolean }> = ({
  data,
  loading,
}) => {
  return (
    <Box
      borderRadius="6px"
      w="100%"
      borderColor="#e1e4e8"
      borderWidth="1px"
      overflow="hidden"
      fontSize="14px"
      mb="50px"
    >
      <Box w="100%" bgColor="#f6f8fa" p="16px" borderBottomWidth="1px">
        <Text as="span" fontWeight="600">
          <InfoOutlineIcon h="16px" transform="rotate(180deg)" mr="8px" />
          525 Open
        </Text>

        <Box as="span" display="inline-block" ml="16px">
          <CheckIcon mr="14px" />
          <Text as="span">9,402 Closed</Text>
        </Box>
      </Box>

      <div data-testid="issues">
        {!loading && data.map((issue) => <Issue key={issue.id} data={issue} />)}
      </div>
    </Box>
  );
};

export default Issues;

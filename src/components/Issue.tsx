import * as React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { InfoOutlineIcon, ChatIcon } from "@chakra-ui/icons";
import { formatDistance } from "date-fns";
import { IIssue } from "../types";

const Issue: React.FC<{ data: IIssue }> = ({ data }) => {
  const today = new Date();

  return (
    <Box
      w="100%"
      p="16px"
      _hover={{
        bgColor: "#f6f8fa",
      }}
      _notLast={{
        borderBottomWidth: "1px",
      }}
      position="relative"
    >
      <Box display="inline-block" bgColor="black">
        <InfoOutlineIcon color="#228639" h="16px" transform="rotate(180deg)" />
      </Box>
      <Box display="inline-block">
        <Link
          href={data.html_url}
          pl="8px"
          fontWeight="600"
          display="inline-block"
          _hover={{
            textDecor: "none",
          }}
        >
          {data.title}
        </Link>
        <Text pl="8px" fontSize="12px" marginTop="4px">
          #{data.number}{" "}
          {data.state === "open" &&
            `opened ${formatDistance(
              new Date(data.created_at),
              today
            )} ago by ${data.user.login}`}
          {data.state === "closed" &&
            `by ${data.user.login} was closed ${formatDistance(
              new Date(data.closed_at),
              today
            )} ago`}
        </Text>
      </Box>

      <Text
        display="inline-flex"
        position="absolute"
        right="16px"
        top="16px"
        alignItems="center"
      >
        <ChatIcon marginRight="2px" />
        <Text as="span">{data.comments}</Text>
      </Text>
    </Box>
  );
};

export default Issue;

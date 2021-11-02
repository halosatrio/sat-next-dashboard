import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Image,
  Text,
  Flex,
  Box,
  Badge,
  Link,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import Layout from "components/Layout";

import data from "./data.json";
import { css } from "@emotion/react";

const badgeColor = {
  high: "red",
  normal: "green",
  low: "yellow",
};

const TicketPage = () => {
  dayjs.extend(customParseFormat);

  const tableCell = css`
    cursor: pointer;
    &:hover {
      background-color: #edf2f7;
    }
  `;

  return (
    <Layout title="Tickets">
      <Box borderWidth="1px" borderRadius="lg" height="100%" bg="white">
        <Flex justifyContent="space-between" m="2rem">
          <Text as="h2" fontWeight="bold" fontSize="xl">
            All Tickets
          </Text>
          <Flex alignItems="center">
            <Image
              src="/icons/sort.svg"
              boxSize="14px"
              marginRight="0.5rem"
              alt="icon"
            />
            <Text as="p" fontSize="sm" marginRight="2rem" color="gray.600">
              Sort
            </Text>
            <Image
              src="/icons/filter.svg"
              boxSize="14px"
              marginRight="0.5rem"
              color="gray.600"
              alt="icon"
            />
            <Text as="p" fontSize="sm">
              Filter
            </Text>
          </Flex>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.400">Ticket details</Th>
              <Th color="gray.400">Customer name</Th>
              <Th color="gray.400">Date</Th>
              <Th color="gray.400">Priority</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id} css={tableCell}>
                <Td display="flex" alignItems="center">
                  <Image
                    src={item.photo}
                    alt={item.customer_name}
                    boxSize="40px"
                    marginRight="1rem"
                  />
                  {item.detail}
                </Td>
                <Td>{item.customer_name}</Td>
                <Td>{dayjs(item.date, "YYYY/MM/DD").format("MMMM D, YYYY")}</Td>
                <Td>
                  <Badge
                    colorScheme={badgeColor[item.priority]}
                    variant="solid"
                    borderRadius="xl"
                    p="4px 10px"
                  >
                    {item.priority}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent="flex-end" m="2rem" alignItems="center">
          <Text color="gray.400" fontSize="sm">
            Rows per page: 8
          </Text>
          <Text color="gray.400" fontSize="sm" m="0 1rem 0 2rem">
            1-8 of 1240
          </Text>
          <Button variant="ghost" size="xs" marginRight="0.5rem">
            <ChevronLeftIcon />
          </Button>
          <Button variant="ghost" size="xs">
            <ChevronRightIcon />
          </Button>
        </Flex>
      </Box>
    </Layout>
  );
};

export default TicketPage;

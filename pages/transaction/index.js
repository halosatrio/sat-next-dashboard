import { useEffect, useState } from "react";
import {
  Select,
  Flex,
  Button,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Layout from "components/Layout/index";

import Pagination from "components/Pagination";

import data from "data/transaction.json";

const TransactionPage = () => {
  //States
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(25);
  const [currentData, setCurrentData] = useState([]);

  // Hooks
  useEffect(() => {
    setCurrentData(data);
  }, []);

  // Handlers
  const handleChangeSize = (value) => {
    setSize(value);
    setPage(0);
  };

  const onPrev = () => {
    setPage(page + 1);
  };

  const onNext = () => {
    setPage(page + 1);
  };

  const handleFilter = () => {
    console.log("filter clicked");
  };

  return (
    <Layout title="Transaction">
      <Box py="1rem">
        <Pagination />
        <Box borderWidth="1px" borderRadius={8} height="100%" p="1rem">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Date</Th>
                <Th>Activity</Th>
                <Th>Location</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentData
                .slice(page * size, page * size + size)
                .map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.user}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.activity}</Td>
                    <Td>{item.location}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Layout>
  );
};

export default TransactionPage;

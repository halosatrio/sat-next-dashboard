import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Layout from "components/Layout/index";

import data from "data/transaction.json";

const TransactionPage = () => {
  return (
    <Layout title="Transaction">
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
            {data.map((item) => (
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
    </Layout>
  );
};

export default TransactionPage;

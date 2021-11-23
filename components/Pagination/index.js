import { Flex, Text, Button, Select } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = () => {
  return (
    <Flex justifyContent="space-between" mb="1rem">
      filter
      <Flex justifyContent="space-between" alignItems="center" mb="1rem">
        <Text mr="10px">rows per page:</Text>
        <Select width="100px">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
        <Button mx="10px">
          <ChevronLeftIcon />
        </Button>
        <Button>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;

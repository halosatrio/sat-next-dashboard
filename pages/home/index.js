import {
  RadioGroup,
  Stack,
  Radio,
  VStack,
  Badge,
  Image,
  HStack,
  Text,
  Flex,
  Box,
  Link,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";

import Layout from "components/Layout/index";

const HomePage = () => {
  const boxHeader = css`
    width: 100%;
    text-align: center;
    padding: 1.5rem 2rem;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
  `;

  return (
    <Layout title="Overview">
      <HStack spacing={8} marginBottom="30px">
        {boxHeaderData.map((item, idx) => (
          <Box
            key={idx}
            _hover={{ borderColor: "blue.500" }}
            role="group"
            css={boxHeader}
          >
            <Text
              as="h2"
              fontSize="lg"
              color="gray.500"
              _groupHover={{ color: "blue.500" }}
            >
              {item.label}
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              mt="12px"
              fontWeight="bold"
              _groupHover={{ color: "blue.500" }}
            >
              {item.value}
            </Text>
          </Box>
        ))}
      </HStack>
      <Box borderWidth="1px" borderRadius="lg" height="100%" mb="30px">
        <Flex flexDirection="row">
          <Box width="70%" height="100%" p="2rem">
            <Text fontSize="xl">Today's trends</Text>
            <Text fontSize="xs" color="gray.500">
              as of 25 May 2019, 09:41 PM
            </Text>
            <Image src="/graph.png" alt="graph" />
          </Box>
          <VStack
            height="100%"
            spacing={0}
            width="30%"
            textAlign="center"
            borderLeft="1px"
            borderColor="gray.300"
          >
            <Box
              borderBottom="1px"
              borderColor="gray.300"
              width="100%"
              p="1rem 0"
              minH="100%"
            >
              <Text fontSize="md" color="gray.500">
                Resolved
              </Text>
              <Text fontSize="2xl" mt="6px" fontWeight="bold">
                449
              </Text>
            </Box>
            <Box
              borderBottom="1px"
              borderColor="gray.300"
              width="100%"
              p="1rem 0"
              minH="100%"
            >
              <Text fontSize="md" color="gray.500">
                Received
              </Text>
              <Text fontSize="2xl" mt="6px" fontWeight="bold">
                426
              </Text>
            </Box>
            <Box
              borderBottom="1px"
              borderColor="gray.300"
              width="100%"
              p="1rem 0"
              minH="100%"
            >
              <Text fontSize="md" color="gray.500">
                Average first response time
              </Text>
              <Text fontSize="2xl" mt="6px" fontWeight="bold">
                33m
              </Text>
            </Box>
            <Box
              borderBottom="1px"
              borderColor="gray.300"
              width="100%"
              p="1rem 0"
              minH="100%"
            >
              <Text fontSize="md" color="gray.500">
                Average response time
              </Text>
              <Text fontSize="2xl" mt="6px" fontWeight="bold">
                3h 8m
              </Text>
            </Box>
            <Box width="100%" p="1rem 0" minH="100%">
              <Text fontSize="md" color="gray.500">
                Resolution within SLA
              </Text>
              <Text fontSize="2xl" mt="6px" fontWeight="bold">
                94%
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
      <HStack spacing={8} alignItems="flex-start">
        <Box borderRadius="lg" width="100%" borderWidth="1px">
          <Flex
            justifyContent="space-between"
            p="1.5rem 2rem"
            alignItems="center"
          >
            <div>
              <Text fontSize="xl" fontWeight="bold">
                Unresolve tickets
              </Text>
              <Text fontSize="xs" color="gray.500">
                Group: Support
              </Text>
            </div>
            <Text fontSize="sm" fontWeight="light" color="blue.500">
              View details
            </Text>
          </Flex>
          {unresolveTicketData.map((item, i) => (
            <Box
              key={item.value}
              p="1rem 2rem"
              height="50px"
              textAlign="center"
              borderBottom={unresolveTicketData.length === i + 1 ? null : "1px"}
              borderColor={
                unresolveTicketData.length === i + 1 ? null : "gray.300"
              }
              display="flex"
              justifyContent="space-between"
            >
              <Text fontSize="xs">{item.label}</Text>
              <Text fontSize="xs" color="gray.400">
                {item.value}
              </Text>
            </Box>
          ))}
        </Box>
        <Box borderRadius="lg" width="100%" borderWidth="1px">
          <Flex
            justifyContent="space-between"
            p="1.5rem 2rem"
            alignItems="center"
          >
            <div>
              <Text fontSize="xl" fontWeight="bold">
                Tasks
              </Text>
              <Text fontSize="xs" color="gray.500">
                Today
              </Text>
            </div>
            <Text fontSize="sm" fontWeight="light" color="blue.500">
              View all
            </Text>
          </Flex>
          <Box
            p="1rem 2rem"
            height="50px"
            textAlign="center"
            borderBottom="1px"
            borderColor="gray.300"
            display="flex"
            justifyContent="space-between"
          >
            <Text fontSize="xs" color="gray.400">
              Create new task
            </Text>
            <Box
              bg="gray.300"
              borderRadius="lg"
              width="24px"
              height="24px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <AddIcon w="10px" h="10px" />
            </Box>
          </Box>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="Column">
              {taskRadioData.map((item, i) => (
                <Box
                  key={item.value}
                  p="0.5rem 2rem"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={taskRadioData.length === i + 1 ? null : "1px"}
                  borderColor={
                    taskRadioData.length === i + 1 ? null : "gray.300"
                  }
                >
                  <Radio colorScheme="blue" value={item.value} size="sm">
                    {item.label}
                  </Radio>
                  <Badge
                    colorScheme={item.badgeStyle}
                    variant="solid"
                    borderRadius="md"
                    p="5px 12px"
                  >
                    {item.badgeLabel}
                  </Badge>
                </Box>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
      </HStack>
    </Layout>
  );
};

export default HomePage;

const boxHeaderData = [
  { label: "Unresolve", value: 60 },
  { label: "Overdue", value: 16 },
  { label: "Open", value: 43 },
  { label: "On hold", value: 64 },
];
const unresolveTicketData = [
  { label: "Waiting on Feature Request", value: 4238 },
  { label: "Awaiting Customer Response", value: 1005 },
  { label: "Awaiting Developer Fix", value: 914 },
  { label: "Pending", value: 281 },
];
const taskRadioData = [
  {
    label: "Finish ticket update",
    value: "1",
    badgeLabel: "urgent",
    badgeStyle: "yellow",
  },
  {
    label: "Create new ticket example",
    value: "2",
    badgeLabel: "new",
    badgeStyle: "green",
  },
  {
    label: "Update ticket report",
    value: "3",
    badgeLabel: "urgent",
    badgeStyle: "gray",
  },
];

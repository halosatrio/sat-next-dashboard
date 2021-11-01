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
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Header from "components/Header";
import Sidebar from "components/Sidebar";

const HomePage = () => {
  const MainContainer = styled.div`
    position: relative;
  `;
  const LayoutKiri = styled.div`
    position: fixed;
    top: 0;
    left: 0;
  `;
  const LayoutKanan = styled.div`
    padding: 2rem 1rem;
    margin-left: 230px;
  `;
  const boxHeader = css`
    width: 100%;
    text-align: center;
    padding: 1.5rem 2rem;
    border-width: 1px;
    border-radius: 8px;
  `;
  return (
    <MainContainer>
      <LayoutKiri>
        <Sidebar />
      </LayoutKiri>
      <LayoutKanan>
        <Header />
        <HStack spacing={8} marginBottom="30px">
          <Box
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
              Unresolve
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              mt="12px"
              fontWeight="bold"
              _groupHover={{ color: "blue.500" }}
            >
              60
            </Text>
          </Box>
          <Box
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
              Overdue
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              mt="12px"
              fontWeight="bold"
              _groupHover={{ color: "blue.500" }}
            >
              16
            </Text>
          </Box>
          <Box
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
              Open
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              mt="12px"
              fontWeight="bold"
              _groupHover={{ color: "blue.500" }}
            >
              43
            </Text>
          </Box>
          <Box
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
              On hold
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              mt="12px"
              fontWeight="bold"
              _groupHover={{ color: "blue.500" }}
            >
              64
            </Text>
          </Box>
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
            <Box
              p="1rem 2rem"
              height="50px"
              textAlign="center"
              borderBottom="1px"
              borderColor="gray.300"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontSize="xs">Waiting on Feature Request</Text>
              <Text fontSize="xs" color="gray.400">
                4238
              </Text>
            </Box>
            <Box
              p="1rem 2rem"
              height="50px"
              textAlign="center"
              borderBottom="1px"
              borderColor="gray.300"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontSize="xs">Awaiting Customer Response</Text>
              <Text fontSize="xs" color="gray.400">
                1005
              </Text>
            </Box>
            <Box
              p="1rem 2rem"
              height="50px"
              textAlign="center"
              borderBottom="1px"
              borderColor="gray.300"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontSize="xs">Awaiting Developer Fix</Text>
              <Text fontSize="xs" color="gray.400">
                914
              </Text>
            </Box>
            <Box
              p="1rem 2rem"
              height="50px"
              textAlign="center"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontSize="xs">Pending</Text>
              <Text fontSize="xs" color="gray.400">
                281
              </Text>
            </Box>
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
                <Box
                  p="0.5rem 2rem"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom="1px"
                  borderColor="gray.300"
                >
                  <Radio colorScheme="blue" value="1" size="sm">
                    Finish ticket update
                  </Radio>
                  <Badge
                    colorScheme="yellow"
                    variant="solid"
                    borderRadius="md"
                    p="5px 12px"
                  >
                    Urgent
                  </Badge>
                </Box>
                <Box
                  p="0.5rem 2rem"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom="1px"
                  borderColor="gray.300"
                >
                  <Radio colorScheme="blue" value="2" size="sm">
                    Create new ticket example
                  </Radio>
                  <Badge
                    colorScheme="green"
                    variant="solid"
                    borderRadius="md"
                    p="5px 12px"
                  >
                    New
                  </Badge>
                </Box>
                <Box
                  p="0.5rem 2rem"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Radio colorScheme="blue" value="3" size="sm">
                    Update ticket report
                  </Radio>
                  <Badge variant="solid" borderRadius="md" p="5px 12px">
                    Urgent
                  </Badge>
                </Box>
              </Stack>
            </RadioGroup>
          </Box>
        </HStack>
      </LayoutKanan>
    </MainContainer>
  );
};

export default HomePage;

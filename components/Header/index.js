import { Text, Flex, Image, Link, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Header = ({ title }) => {
  const Separator = styled.div`
    background-color: #c5c7cd;
    height: 32px;
    width: 1px;
    margin: 0 2rem;
  `;
  return (
    <Flex justifyContent="space-between" mb="1rem">
      <Text as="h2" fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <Flex alignItems="center">
        <Image src="/icons/notification.svg" alt="logo" boxSize="16px" />
        <Separator />
        <Text as="p" fontSize="sm">
          Satrio Bayu Aji
        </Text>
        <Image
          src="/photo.png"
          alt="foro user"
          boxSize="40px"
          marginLeft="14px"
        />
      </Flex>
    </Flex>
  );
};

export default Header;

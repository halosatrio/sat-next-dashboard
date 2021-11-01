import { Text, Flex, Image, Link, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Sidebar = () => {
  const SidebarContainer = styled.div`
    width: 230px;
    height: 100vh;
    background-color: #363740;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
  `;
  const Separator = styled.div`
    border-top: 1px solid #444555;
    width: 100%;
    margin: 0.5rem 0;
  `;
  const menu_active = css`
    background-color: #444555;
    border-left: 3px solid #dde2ff;
    height: 56px;
    width: 100%;
    padding: 0 2rem;
    align-items: center;
  `;
  const menu = css`
    height: 56px;
    width: 100%;
    padding: 0 2rem;
    align-items: center;
    margin: 0 3px;
  `;

  return (
    <SidebarContainer>
      <Flex alignItems="center" marginBottom="58px" px="2rem">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          boxSize="32px"
          marginRight="0.5rem"
        />
        <Text as="h3" fontSize="md" color="#A4A6B3" fontWeight="bold">
          Dashboard Kit
        </Text>
      </Flex>
      <Flex css={menu_active}>
        <Image
          src="/icons/overview-active.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#DDE2FF" fontWeight="light">
          Overview
        </Text>
      </Flex>
      <Flex css={menu}>
        <Image
          src="/icons/ticket.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Tickets
        </Text>
      </Flex>
      <Flex css={menu}>
        <Image
          src="/icons/ideas.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Ideas
        </Text>
      </Flex>
      <Flex css={menu}>
        <Image
          src="/icons/contact.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Contacts
        </Text>
      </Flex>
      <Flex css={menu}>
        <Image
          src="/icons/agent.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Agents
        </Text>
      </Flex>
      <Flex css={menu}>
        <Image
          src="/icons/article.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Articles
        </Text>
      </Flex>
      <Separator />
      <Flex css={menu}>
        <Image
          src="/icons/setting.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Setting
        </Text>
      </Flex>
      <Flex css={menu}>
        <Image
          src="/icons/subscription.svg"
          alt="logo"
          boxSize="16px"
          marginRight="1.2rem"
        />
        <Text as="p" fontSize="sm" color="#A4A6B3" fontWeight="light">
          Subscriptions
        </Text>
      </Flex>
    </SidebarContainer>
  );
};

export default Sidebar;

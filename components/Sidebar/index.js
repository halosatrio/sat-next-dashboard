import Link from "next/link";
import { useRouter } from "next/router";
import { Text, Flex, Image, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const sidebarMenu = [
  {
    label: "home",
    icon_active: "/icons/overview-active.svg",
    icon: "/icons/overview.svg",
    href: "/home",
  },
  {
    label: "tickets",
    icon_active: "/icons/ticket-active.svg",
    icon: "/icons/ticket.svg",
    href: "/tickets",
  },
  { label: "ideas", icon_active: "", icon: "/icons/ideas.svg", href: "#" },
  { label: "contacts", icon_active: "", icon: "/icons/contact.svg", href: "#" },
  { label: "agents", icon_active: "", icon: "/icons/agent.svg", href: "#" },
  { label: "articles", icon_active: "", icon: "/icons/article.svg", href: "#" },
];

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
  const capitalize = css`
    text-transform: capitalize;
  `;

  const { pathname } = useRouter();

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
      {sidebarMenu.map((item) => (
        <Link href={item.href} key={item.label}>
          <a>
            <Flex css={pathname === "/" + item.label ? menu_active : menu}>
              <Image
                src={item.icon}
                alt="logo"
                boxSize="16px"
                marginRight="1.2rem"
              />
              <Text
                as="p"
                fontSize="sm"
                color="#DDE2FF"
                fontWeight="light"
                css={capitalize}
              >
                {item.label === "home" ? "Overview" : item.label}
              </Text>
            </Flex>
          </a>
        </Link>
      ))}

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

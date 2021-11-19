import Link from "next/link";
import { useRouter } from "next/router";
import { Text, Flex, Box, Square, Button, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const sidebarMenu = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Transactions",
    href: "/transactions",
  },
  { label: "Book Tracking", href: "/tracking" },
  { label: "Collections", href: "/collections" },
  { label: "List of Users", href: "/user-list" },
];

const Sidebar = () => {
  const SidebarContainer = styled.div`
    width: 250px;
    height: 100vh;
    padding: 1rem 0 1rem 1rem;
  `;
  const Sidebar = styled(Box)`
    width: 100%;
    height: 100%;
    background-color: #363740;
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const NavLink = styled(Box)`
    margin: 1rem 0;
    padding: 0.5rem 2rem;
    &:hover {
      background-color: red;
    }
  `;
  const capitalize = css`
    text-transform: capitalize;
  `;

  return (
    <SidebarContainer>
      <Sidebar borderRadius="xl">
        <div>
          <Text
            as="h2"
            fontSize="3xl"
            color="blue.400"
            mb="2rem"
            fontWeight="bold"
            textAlign="center"
          >
            Perpus.io
          </Text>
          {sidebarMenu.map((item) => (
            <Link href={item.href} key={item.label}>
              <a>
                <NavLink
                  fontSize="md"
                  color="#DDE2FF"
                  fontWeight="bold"
                  borderRadius={4}
                  alignItems="center"
                >
                  {item.label}
                </NavLink>
              </a>
            </Link>
          ))}
        </div>
        <Flex alignItems="center" justifyContent="center">
          <Square size="28px" bg="gray.300" borderRadius={8} mr="0.8rem">
            <Image src="/icons/logout.svg" alt="logo" boxSize="18px" />
          </Square>
          <Text as="span" color="gray.200" fontSize="md">
            Logout
          </Text>
        </Flex>
      </Sidebar>
    </SidebarContainer>
  );
};

export default Sidebar;

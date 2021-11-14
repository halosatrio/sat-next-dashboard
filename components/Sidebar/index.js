import Link from "next/link";
import { useRouter } from "next/router";
import { Text, Flex, Box, Button, Image } from "@chakra-ui/react";
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
    padding: 1rem;
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
            fontSize="2xl"
            color="gray.400"
            mb="10px"
            textAlign="center"
          >
            Perpus.io
          </Text>
          <Flex alignItems="center" px="2rem" justifyContent="space-between">
            <Image src="/photo.png" boxSize="32px" alt="profile logo" />
            <Text as="h3" fontSize="lg" color="gray.400" my="10px">
              Admin 1
            </Text>
          </Flex>
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
                  {item.label === "home" ? "Overview" : item.label}
                </NavLink>
              </a>
            </Link>
          ))}
        </div>
        <Text textAlign="center" color="gray.200">
          Logout
        </Text>
      </Sidebar>
    </SidebarContainer>
  );
};

export default Sidebar;

import {
  Center,
  Text,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const LoginPage = () => {
  const BgContainer = styled(Center)`
    width: 100%;
    height: 100vh;
    // background-color: #093545;
    background: linear-gradient(
      180deg,
      #0575e6 0%,
      #02298a 84.79%,
      #021b79 100%
    );
    padding: 2rem 0;
  `;

  const LoginBox = styled(Box)`
    margin: auto;
    border-radius: 8px;
    border: 1px solid white;
    width: 380px;
    max-height: 582px;
    background-color: white;
    color: gray;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
  `;

  return (
    <BgContainer>
      <Box
        m="auto"
        borderRadius={8}
        width="350px"
        bg="white"
        display="flex"
        p="2rem 1.5rem"
        color="gray"
        flexDirection="column"
        alignItems="center"
      >
        <Image
          src="/icons/logo.svg"
          alt="logo"
          boxSize="48px"
          marginBottom="1rem"
        />
        <Text as="h1" fontSize="3xl">
          Perpus.io
        </Text>
        <Text as="h2" fontSize="lg" mt="1rem" mb="32px" color="gray.500">
          Log In to Dashboard
        </Text>
        <FormControl id="email" mb="24px">
          <FormLabel fontSize="sm">Username</FormLabel>
          <Input
            borderRadius={5}
            type="text"
            placeholder="Username..."
            fontSize="sm"
            size="md"
          />
        </FormControl>
        <FormControl id="password" mb="24px">
          <FormLabel fontSize="sm">Password</FormLabel>
          <Input
            borderRadius={5}
            type="password"
            placeholder="Password..."
            size="md"
          />
        </FormControl>
        <Button color="white" bg="blue.400" type="submit" width="100%">
          Login
        </Button>
      </Box>
    </BgContainer>
    /* <div className="index_main_container">
      <div className="login_box">
        <div className="login_logo">
          <img src="/icons/logo.svg" alt="logo" width={48} />
          <h2>Dashboard Kit</h2>
        </div>
        <div className="login_title">
          <h1>Log In to Dashboard Kit</h1>
          <h4>Enter your email and password below</h4>
        </div>
      </div>
    </div> */
  );
};

export default LoginPage;

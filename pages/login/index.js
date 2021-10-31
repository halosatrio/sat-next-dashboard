import {
  Text,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const LoginPage = () => {
  const BgContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #363740;
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
    // <div className="index_main_container">
    //   <div className="login_box">
    //     <div className="login_logo">
    //       <img src="/icons/logo.svg" alt="logo" width={48} />
    //       <h2>Dashboard Kit</h2>
    //     </div>
    //     <div className="login_title">
    //       <h1>Log In to Dashboard Kit</h1>
    //       <h4>Enter your email and password below</h4>
    //     </div>
    //   </div>
    // </div>
    <BgContainer>
      <Box
        m="auto"
        borderRadius={8}
        width="380px"
        bg="white"
        display="flex"
        p="2.5rem 2rem"
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
        <Text as="h2" fontSize="xl">
          Dashboard Kit
        </Text>
        <Text as="h1" fontSize="2xl" mt="30px" color="black">
          Log In to Dashboard Kit
        </Text>
        <Text as="h4" fontSize="sm" mt="12px" mb="32px">
          Enter your email and password below
        </Text>
        <FormControl id="email" mb="24px">
          <FormLabel fontSize="xs">Email</FormLabel>
          <Input
            type="email"
            placeholder="Email address"
            fontSize="sm"
            size="sm"
          />
        </FormControl>
        <FormControl id="password" mb="24px">
          <FormLabel fontSize="xs">Password</FormLabel>
          <Input type="password" placeholder="Password" size="sm" />
        </FormControl>
        <Button color="white" bg="blue.400" type="submit" width="100%">
          Login
        </Button>
        <Text as="p" fontSize="sm" mt="32px">
          Don’t have an account?{" "}
          <Link color="blue.500" href="#">
            Sign up
          </Link>
        </Text>
      </Box>
      {/* <LoginBox>test login page</LoginBox> */}
    </BgContainer>
  );
};

export default LoginPage;

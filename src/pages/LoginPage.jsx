import React from "react";
import { Box, Flex, Text, Heading, Button, Image, Center, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import doctor from "./../images/doctor.png";
import patient from "./../images/patient.png";
import analyser from "./../images/analyst.png";

const RoleCard = ({ title, description, img, loginlink }) => {
  return (
    <Link to={loginlink}>
      <Box
        maxW="sm"
        minW="250px"
        // borderWidth="1px"
        // borderRadius="lg"
        // overflow="hidden"
        p="6"
        m="4"
        // boxShadow="md"
      >
        <Image src={img} />
        <Heading fontSize="40px" textTransform={"uppercase"} color="rgba(11, 71, 93, 1)" textAlign={"center"}>{title}</Heading>
      </Box>
    </Link>
  );
};

const LoginPage = () => {
  return (
    <Stack justify="center" align={"center"} minH="100vh">
    <Heading fontSize="40px" textTransform={"uppercase"} color="rgba(11, 71, 93, 1)" textAlign={"center"}>SIGN UP AS</Heading>
    <Flex justify="center" align="center" wrap="wrap">
      <RoleCard
        title="Doctor"
        description="Administrator role with full access."
        loginlink="/doctor/login"
        img={doctor}
        />
      <RoleCard
        title="User"
        description="Regular user role with limited access."
        loginlink="/user/login"
        img={patient}
        />
      <RoleCard
        title="Analyser"
        description="Guest role with minimal access."
        loginlink="/analyser/login"
        img={analyser}
      />
    </Flex>
    </Stack>
  );
};

export default LoginPage;

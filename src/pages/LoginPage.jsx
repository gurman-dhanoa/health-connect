import React from 'react'
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const RoleCard = ({ title, description, loginlink }) => {
    return (
      <Box
        maxW="sm"
        minW="250px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="6"
        m="4"
        boxShadow="md"
      >
        <Heading fontSize="xl">{title}</Heading>
        <Text mt="4">{description}</Text>
        <Link to={loginlink}>
            <Button mt="4" colorScheme="teal">
                Login
            </Button>
        </Link>
      </Box>
    );
  };

const LoginPage = () => {
  return (
    <Flex justify="center" align="center" minH="100vh" wrap="wrap">
        <RoleCard
          title="Doctor"
          description="Administrator role with full access."
          loginlink="/doctor/login"
        />
        <RoleCard
          title="User"
          description="Regular user role with limited access."
          loginlink="/user/login"
        />
        <RoleCard
          title="Analyser"
          description="Guest role with minimal access."
          loginlink="/analyser/login"
        />
      </Flex>
  )
}

export default LoginPage
import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputRightElement, Button, useToast, } from "@chakra-ui/react";
import { userLogin } from "./../../../store/User/UserAction";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearError } from "../../../store/User/User";

const UserLogin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  // form object
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  const { error, isAuthenticatedUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      dispatch(clearError());
    }
    if (isAuthenticatedUser) {
      toast({
        title: "Success",
        description: "Welcome to job match",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/user/profile");
    }
  }, [dispatch, navigate, error, isAuthenticatedUser, toast]);
  return (
    <VStack className="loginBgStyle" align={"flex-start"} m={"auto"}>
      <Box margin={"50px auto"}>
        <Heading color="black">Login</Heading>
        <Box className="loginBgStyleBox">
          <form onSubmit={handleSubmit(submitForm)}>
            <FormControl m={4} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" w={"90%"} {...register("email")} />
            </FormControl>
            <FormControl m={4} isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md" w="90%">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password")}
                />
                <InputRightElement width="4.5rem" mr={8}>
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button m={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
          <Text textAlign={"center"}>
            Do not have account?
            <Link
              onClick={() => {
                navigate("/user/register");
              }}
            >
              Register
            </Link>
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default UserLogin;
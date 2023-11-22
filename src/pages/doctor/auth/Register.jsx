import {
  Box,
  Heading,
  InputLeftAddon,
  InputLeftElement,
  Link,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { doctorRegister } from "./../../../store/Doctor/DoctorAction";
import { FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearDoctorError } from "../../../store/Doctor/Doctor";
import StateDistrictLocation from "../../../components/GoogleMapComponent";

const DoctorRegister = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  // form object
  const { register, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState("/Profile.png");
  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const [clinicState, setClinicState] = useState("");
  const [clinicCity, setClinicCity] = useState("");
  const [permanentState, setPermanentState] = useState("");
  const [permanentCity, setPermanentCity] = useState("");
  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    data.images = avatar;
    data.clinicState = clinicState;
    data.clinicCity = clinicCity;
    data.permanentState = permanentState;
    data.permanentCity = permanentCity;
    dispatch(doctorRegister(data));
  };
  const { error, isAuthenticatedDoctor } = useSelector((state) => state.doctor);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch(clearDoctorError());
    }
    if (isAuthenticatedDoctor) {
      toast({
        title: "Success",
        description: "Welcome to Health Connect",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/doctor/profile");
    }
  }, [dispatch, navigate, error, isAuthenticatedDoctor, toast]);
  return (
    <VStack className="loginBgStyle" align={"flex-start"} m={"auto"}>
      <Box margin={"50px auto"}>
        <Heading color="black">Doctor Register</Heading>
        <Box className="loginBgStyleBox">
          <form onSubmit={handleSubmit(submitForm)}>
            <Stack spacing={4} m={4}>
              <FormControl isRequired>
                <Text textAlign={"center"}>
                  Already have account?
                  <Link
                    onClick={() => {
                      navigate("/doctor/login");
                    }}
                  >
                    Login
                  </Link>
                </Text>
              </FormControl>
              <FormControl isRequired>
                <Input type="text" {...register("name")} placeholder="Name" />
              </FormControl>
              <FormControl isRequired>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="Email Address"
                />
              </FormControl>

              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                  />
                  <InputRightElement width="4.5rem" mr={8}>
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <Input
                  type="text"
                  {...register("qualification")}
                  placeholder="Qualification"
                />
              </FormControl>

              <FormControl isRequired>
                <Input
                  type="text"
                  {...register("specialization")}
                  placeholder="Specialization"
                />
              </FormControl>

              <FormControl isRequired>
                <Select placeholder="Select Gender" {...register("gender")}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children="DOB" />
                  <Input
                    type="date"
                    placeholder="Date of Birth"
                    {...register("dateOfBirth")}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <Input
                  type="text"
                  {...register("experience")}
                  placeholder="Experience"
                />
              </FormControl>

              <FormControl isRequired>
                <Textarea
                  type="text"
                  {...register("discription")}
                  placeholder="Discription"
                />
              </FormControl>

              <Text fontFamily={"Outfit"}>
                <b>Clinic Location</b>
              </Text>

              <StateDistrictLocation state={setClinicState} city={setClinicCity}/>

              <FormControl isRequired>
                <Input
                  type="text"
                  {...register("clinicStreet")}
                  placeholder="Street"
                />
              </FormControl>

              <FormControl isRequired>
                <Input
                  type="number"
                  {...register("clinicNumber")}
                  placeholder="Pincode"
                />
              </FormControl>

              <Text fontFamily={"Outfit"}>
                <b>Permanent Address</b>
              </Text>

              <StateDistrictLocation state={setPermanentState} city={setPermanentCity}/>

              <FormControl isRequired>
                <Input
                  type="text"
                  {...register("permanentStreet")}
                  placeholder="Street"
                />
              </FormControl>

              <FormControl isRequired>
                <Input
                  type="number"
                  {...register("permanentNumber")}
                  placeholder="Pincode"
                />
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="₹"
                  />
                  <Input placeholder="Fees" {...register("fees")} />
                </InputGroup>
              </FormControl>

              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  {...register("contactNumber")}
                />
              </InputGroup>

              <FormControl isRequired>
                <Select
                  placeholder="Current Status"
                  {...register("current_status")}
                >
                  <option value={true}>Available</option>
                  <option value={false}>Not Available</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <Text fontFamily={"Outfit"}>Profile Image</Text>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  {...register("avatar")}
                  onChange={onChange}
                />
              </FormControl>
              <Button bg="#edf2f7" color="#386cd0" w={"150px"} type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </VStack>
  );
};

export default DoctorRegister;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { doctorDetails } from "../../store/Doctor/DoctorAction";
import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "../../components/Loader/Loader";
import CreateAppointment from "../../components/appointment/CreateApp";
import DoctorReviews from "../../components/review/DoctorReviews";

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(doctorDetails(id));
  }, [dispatch, id]);
  const { doctor } = useSelector((state) => state.doctor);
  return !doctor ? (
    <Loader />
  ) : (
    <Box w={"90vw"} m={"auto"}>
      <HStack>
        <Image src={doctor.image.url} boxSize={"150px"} borderRadius={"50%"} />
        <VStack spacing={0} align={"flex-start"}>
          <Heading fontSize={"30px"} fontFamily={"Outfit"}>
            {doctor.name}
          </Heading>
          <Text ml={1}>{doctor.specialization}</Text>
          <CreateAppointment id={id} status={doctor.current_status}/>
        </VStack>
      </HStack>
      <Stack spacing={4} m={4} w={"700px"} maxW={"90vw"}>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Email Address</Text>
          <Text ml={1}>{doctor.email}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Qualification</Text>
          <Text ml={1}>{doctor.qualification}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Experience</Text>
          <Text ml={1}>{doctor.experience}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Discription</Text>
          <Text ml={1}>{doctor.discription}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Clinic Location</Text>
          <Text ml={1}>{doctor.clinicLocation.street}, {doctor.clinicLocation.city}, {doctor.clinicLocation.pincode}, {doctor.clinicLocation.state.name}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Fees</Text>
          <Text ml={1}>{doctor.fees}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Contact Number</Text>
          <Text ml={1}>{doctor.contactNumber}</Text>
        </Box>

        <Box fontFamily={"Outfit"}>
          <Text className="profileLabel">Current Status</Text>
          <Text ml={1}>
            {doctor.current_status ? "Available" : "Not Available"}
          </Text>
        </Box>
      </Stack>
      <DoctorReviews reviews={doctor.reviews}/>
    </Box>
  );
};

export default DoctorDetails;

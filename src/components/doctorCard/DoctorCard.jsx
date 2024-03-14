import React from 'react'
import { Badge, Box, Divider, Flex, HStack, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import LocationIcon from "./../../images/locationIcon.svg";
import CreateAppointment from "../appointment/CreateApp";

const DoctorCard = ({ doctor }) => {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const truncateTitle = (text, length) => {
    if (text.length <= length) {
      return text;
    } else {
      return text.substring(0, length) + '...';
    }
  };
  const handleCardClick = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      navigate(`/doctor/${doctor._id}`);
    }
  };
  return (
    <Box>
      <Flex gap={4} maxW={"800px"} px={4} py={2} onClick={handleCardClick} cursor={"pointer"}>
        <Image src={doctor?.image?.url} alt={doctor.name} height={"180px"} w={"150px"} fit={"cover"} borderRadius={20} />
        <Flex flexDir={"column"} fontFamily={'"Lexend Deca", sans-serif'} fontWeight={300} fontSize={"sm"} gap={3}>
          <Box>
            <Flex justify={"space-between"} align={"center"} wrap={"wrap"}>
              <Text fontWeight={600} fontSize={isSmallerThan768 ? "xl" : "2xl"}>Dr. {doctor.name}</Text>
              {!doctor.current_status && <Badge bg='#A21717' color={"white"} py={1} px={2} borderRadius={10} fontSize={"xs"} fontWeight={200}>Not Available</Badge>}
            </Flex>
            <HStack>
              <Text>{doctor.specialization}</Text>
              <Text textTransform={"capitalize"} color={"#3E63C3"}>{doctor.experience} Experience</Text>
            </HStack>
            <HStack><Image src={LocationIcon} /><Text color={"#595959"} fontWeight={300} fontSize={"sm"}>{doctor?.clinicLocation?.city}, {doctor?.clinicLocation?.state.name}</Text></HStack>
          </Box>
          <Box>
            <Text color={'#A59D9D'}>{truncateTitle(doctor.discription, isSmallerThan768 ? 60 : 130)}</Text>
          </Box>
          <Box><CreateAppointment id={doctor._id} /></Box>
        </Flex>
      </Flex>
      <Divider h={"5px"} borderBottom={"2px solid gray.400"}/>
    </Box>
  )
}

export default DoctorCard
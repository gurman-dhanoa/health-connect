import { Badge, Box, Button, ButtonGroup, Flex, HStack, Image, Text, } from "@chakra-ui/react";
import React from "react";
import "./DoctorCard.css"
import { Link } from "react-router-dom";
import CreateAppointment from "../appointment/CreateApp";

const DoctorCard = ({doctor}) => {
    const homeButton = {
      backgroundColor: "rgba(76, 148, 229, 0.84)",
      borderRadius: "50px",
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 400,
      color: "white",
    };
  return (
    <Box className="doctorCard" p={2}>
        <Image src={(doctor.image)?doctor.image.url:"https://bit.ly/dan-abramov"} alt={doctor.name} boxSize="150px" borderRadius="5px"/>
        <Box className="doctorCardText">
          <HStack justify={"space-between"}>
            <p className="DoctorName">{doctor.name} <span className="experiense ml-40">{doctor.experience}</span></p>
            <HStack spacing={2}>
              {doctor.current_status && <Badge colorScheme='purple'>₹ {doctor.fees}</Badge>}
              {doctor.current_status?<Badge colorScheme='green'>Available</Badge>:<Badge colorScheme='red'>Not Available</Badge>}
            </HStack>
          </HStack>
          <p className="experiense">{doctor.specialization}</p>
          <p className="doctorIntro">{doctor.discription}</p>
          <Flex justify="space-between" align={"center"} w="100%">
            <Text>{doctor.rating}(416 reviews)</Text>
            <ButtonGroup>
              <Link to={`/doctor/${doctor._id}`}>
                <Button style={homeButton}>Know More</Button>
              </Link>
              <CreateAppointment id={doctor._id} status={doctor.current_status}/>
            </ButtonGroup>
          </Flex>
        </Box>
      </Box>
  );
};

export default DoctorCard;
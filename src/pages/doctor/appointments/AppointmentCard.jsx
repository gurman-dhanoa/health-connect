import { Box, HStack, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import AlloteAppointment from "../../../components/appointment/AlloteApp";
import UpdateAppointment from "../../../components/appointment/UpdateApp";
import { IoOpenOutline } from "react-icons/io5";
import UserRecForDoc from "../../../components/appointment/UserRecForDoc";

const AppointmentCard = ({ appointment }) => {
  return (
    <Box
      w={"50vw"}
      minW={"400px"}
      gap={4}
      p={"20px"}
      fontFamily={"Outfit"}
      boxShadow="2px 2px 4px 2px #48484814"
      border="2px solid #48484814"
    >
      <HStack justify={"space-between"}>
        <Text fontWeight={600} fontSize={"20px"} lineHeight={"25px"}>
          {appointment.userId.name}
        </Text>
        <HStack>{appointment.status === "NEW" && <AlloteAppointment id={appointment._id}/>}{appointment.status === "ALLOTED" && <UpdateAppointment id={appointment._id}/>}<UserRecForDoc userId={appointment.userId._id}/></HStack>
      </HStack>
      <Text fontSize={"14px"} lineHeight={"17px"} color={"#8A8A8A"}>
        Age : {appointment.age}
      </Text>
      <HStack>
        <MdOutlineDateRange />
        <Text>{moment(appointment.scheduleDate).format("DD/MM/YYYY hh:mm A")}</Text>
      </HStack>
      <HStack>
        <CiLocationOn />
        <Text>
          {appointment.location.city}, {appointment.location.state.name}
        </Text>
      </HStack>
      <Text>{appointment.comment}</Text>
      <Text p={"10px"} color={"#008BDC"} textAlign={"end"}>
        View
      </Text>
    </Box>
  );
};

export default AppointmentCard;

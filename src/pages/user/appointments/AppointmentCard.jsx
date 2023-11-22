import { Box, HStack, Text } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import moment from "moment/moment";
import CancelAppointment from "../../../components/appointment/CancelApp";
import UpdateRemark from "../../../components/appointment/updateRemark";

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
          {appointment.doctorId.name}
        </Text>
        <HStack fontSize={"20px"}>{appointment.status === "NEW" && <CancelAppointment id={appointment._id}/>}{appointment.status === "COMPLETED" && <UpdateRemark doctorId={appointment.doctorId._id} id={appointment._id}/>}<IoOpenOutline /></HStack>
      </HStack>
      <Text fontSize={"14px"} lineHeight={"17px"} color={"#8A8A8A"}>
        {appointment.doctorId.specialization}
      </Text>
      <HStack>
        <MdOutlineDateRange />
        <Text>{moment(appointment.scheduleDate).format("DD/MM/YYYY hh:mm A")}</Text>
      </HStack>
      <HStack>
        <CiLocationOn />
        <Text>{appointment.location.city}, {appointment.location.state.name}</Text>
      </HStack>
      <Text>{appointment.comment}</Text>
      <Text>{appointment.disease.map(e=>{return <span style={{marginRight:"3px"}}>{e}</span>})}</Text>
      <Text>{appointment.remark}</Text>
    </Box>
  );
};

export default AppointmentCard;

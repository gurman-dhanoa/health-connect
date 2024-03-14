import { Box, Divider, Flex, HStack, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoOpenOutline } from "react-icons/io5";
import moment from "moment/moment";
import CancelAppointment from "../../../components/appointment/CancelApp";
import UpdateRemark from "../../../components/appointment/updateRemark";
import { useNavigate } from "react-router-dom";
import LocationIcon from "./../../../images/locationIcon.svg"
import { GoDotFill } from "react-icons/go";
import { CiClock1 } from "react-icons/ci";




const AppointmentCard = ({ appointment }) => {
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
      navigate(`/doctor/${appointment._id}`);
    }
  };
  return (
    // <Box
    //   w={"50vw"}
    //   minW={"400px"}
    //   gap={4}
    //   p={"20px"}
    //   fontFamily={"Outfit"}
    //   boxShadow="2px 2px 4px 2px #48484814"
    //   border="2px solid #48484814"
    // >
    //   <HStack justify={"space-between"}>
    //     <Text fontWeight={600} fontSize={"20px"} lineHeight={"25px"}>
    //       {appointment.doctorId.name}
    //     </Text>
    //     <HStack fontSize={"20px"}>{appointment.status === "NEW" && <CancelAppointment id={appointment._id}/>}{appointment.status === "COMPLETED" && <UpdateRemark doctorId={appointment.doctorId._id} id={appointment._id}/>}<IoOpenOutline /></HStack>
    //   </HStack>
    //   <Text fontSize={"14px"} lineHeight={"17px"} color={"#8A8A8A"}>
    //     {appointment.doctorId.specialization}
    //   </Text>
    //   <HStack>
    //     <MdOutlineDateRange />
    //     <Text>{moment(appointment.scheduleDate).format("DD/MM/YYYY hh:mm A")}</Text>
    //   </HStack>
    //   <HStack>
    //     <CiLocationOn />
    //     <Text>{appointment.location.city}, {appointment.location.state.name}</Text>
    //   </HStack>
    //   <Text>{appointment.comment}</Text>
    //   <Text>{appointment.disease.map(e=>{return <span style={{marginRight:"3px"}}>{e}</span>})}</Text>
    //   <Text>{appointment.remark}</Text>
    // </Box>
    <Box>
      <Flex gap={4} maxW={"800px"} px={4} py={2} onClick={handleCardClick} cursor={"pointer"}>
        <Flex flexDir={"column"} fontFamily={'"Lexend Deca", sans-serif'} fontWeight={300} fontSize={"sm"} gap={3}>
          <Box>
            <Flex justify={"space-between"} align={"center"} wrap={"wrap"}>
              <Text fontWeight={600} fontSize={isSmallerThan768 ? "xl" : "2xl"}>Dr. {appointment.doctorId.name}</Text>
            </Flex>
            <HStack>
              <Text>{appointment.doctorId.specialization}</Text>
              <Text textTransform={"capitalize"} color={"#3E63C3"}>{appointment.doctorId.experience} Experience</Text>
            </HStack>
            <HStack><Image src={LocationIcon} /><Text color={"#595959"} fontWeight={300} fontSize={"sm"}>{appointment.location?.city}, {appointment.location?.state.name}</Text></HStack>
          </Box>
          <Box>
            <Text color={'#A59D9D'}>{truncateTitle(appointment.doctorId.discription, isSmallerThan768 ? 60 : 130)}</Text>
          </Box>
          <HStack gap={3}>
            <HStack gap={"0px"}>
              <MdOutlineDateRange />
              <Text>{moment(appointment.scheduleDate).format("DD/MM/YYYY")}</Text>
            </HStack>
            <HStack gap={"0px"}>
              <CiClock1 />
              <Text>{moment(appointment.scheduleDate).format("hh:mm A")}</Text>
            </HStack>
            {appointment.status === "ALLOTED" &&
              <HStack color={"#1D9537"} fontWeight={500} gap={"0px"}>
                <GoDotFill />
                <Text>Confirmed</Text>
              </HStack>
            }
          </HStack>
          <HStack fontSize={"20px"}>{appointment.status === "NEW" && <CancelAppointment id={appointment._id} />}{appointment.status === "COMPLETED" && <UpdateRemark doctorId={appointment.doctorId._id} id={appointment._id} />}</HStack>
        </Flex>
        <Image src={appointment.doctorId?.image?.url} alt={appointment.doctorId.name} height={"180px"} w={"150px"} fit={"cover"} borderRadius={20} />
      </Flex>
      <Divider h={"5px"} borderBottom={"2px solid gray.400"} />
    </Box>
  );
};

export default AppointmentCard;

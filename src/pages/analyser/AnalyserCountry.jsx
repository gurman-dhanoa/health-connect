import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyserAppointments } from "../../store/Appointment/AppointmentsAction";
import Loader from "../../components/Loader/Loader";
import AnalyserFilter from "../../components/filter/AnalyserFilter";
import { Box, Flex } from "@chakra-ui/react";
import Analyser from "./analyser";

const AnalyserCountry = () => {
    const [stateInfo, setStateInfo] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(analyserAppointments({}));
    }, []);
    const { loading,appointments } = useSelector((state) => state.appointments);
    const handleFilterSubmit = (filters) => {
      dispatch(analyserAppointments(filters));
    };
  
    return !appointments ? (
        <Loader />
      ) : (
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='100vh'
        w='100vw'
        maxW={"100%"}
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
          {!stateInfo && <Analyser zoom={5} coordinates={{lat:20.5937,lng:78.9629}} label={""} marker={false}/>}
          {!loading && stateInfo && <Analyser zoom={5} coordinates={{lat:Number(stateInfo.latitude),lng:Number(stateInfo.longitude)}} label={appointments.length} marker={true}/>}
        </Box>
        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='white'
          shadow='base'
          minW='container.md'
          zIndex='1'
        >
          <AnalyserFilter onSubmit={handleFilterSubmit} setStateInfo={setStateInfo}/>
        </Box>
      </Flex>
    )
  }
  
  export default AnalyserCountry